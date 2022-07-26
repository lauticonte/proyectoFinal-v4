import express from 'express';
import helmet from 'helmet';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import * as http from 'http';
import MongoStore from 'connect-mongo';
import swaggerUi from 'swagger-ui-express';
import fileUpload from 'express-fileupload';
import docs from 'docs';
import Config from 'config';
import routes from 'routes';
import { unknownEndpoint } from 'middlewares/unknownEndpoint';
import { errorHandler } from 'middlewares/errorHandler';
import { clientPromise } from 'services/mongodb';
import passport from 'middlewares/auth';
import { initWsServer } from './socket';

const app: express.Application = express();

app.use(express.static('public'));
app.use('/uploads', express.static(path.resolve('uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  }),
);

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${Config.MONGO_ATLAS_USER}:${Config.MONGO_ATLAS_PASSWORD}@${Config.MONGO_ATLAS_CLUSTER}/${Config.MONGO_ATLAS_DB}?retryWrites=true&w=majority`,
      clientPromise: clientPromise(),
      ttl: 600000,
      autoRemove: "native",
    })
  })
);


app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

app.use(errorHandler);
app.use(unknownEndpoint);

const Server: http.Server = http.createServer(app);
initWsServer(Server);

export default Server;
