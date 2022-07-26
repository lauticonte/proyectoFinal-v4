import express from 'express';
import passport from 'middlewares/auth';
import { loginUser, logoutUser } from 'controllers/login';
import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
  }
}

const loginRouter = express.Router();

loginRouter.post('/login', passport.authenticate('login', {failureRedirect: '/login'}), loginUser);

// console.log("Esta autenticado? " + req.isAuthenticated());
    
loginRouter.get('/logout', logoutUser);

export default loginRouter;
