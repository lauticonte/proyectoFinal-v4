<h1 align="center">Welcome to MERN Ecommerce 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://mern-ecommerce-coder.herokuapp.com/api-docs/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> A fullstack MERN ecommerce application with Typescript.

### 🧪 [DEMO](https://github.com/lauticonte/proyectoFinal-v4) - Future

## Future Features
- Editing and deleting users routes
- All persistances functionality
- Increase code coverage with more tests
- Specify amount when adding a product to cart
- Edit product stock when creating an order
- Form validation (frontend)
- Pagination for products and orders
- Reset password functionality
- Sort products by category

## Install

Run this command both on back and front folder

```sh
npm install
```

## Usage

Create a .env file in the back folder with all the necessary variables (use .env.example file as an example).

You can run the whole project on development mode by going to the back folder and running:

```sh
npm run server:client
```

To run on production mode, run:

```sh
npm run build:start
```

However, if modifications are made to the frontend and you want those modifications to be seen on production mode, run this command first:

```sh
npm run build:ui
```

## Run tests

For now tests are only available in the backend and only for the products routes. To run those tests, go to the back folder and run:

```sh
npm run test
```

## Author

👤 **Lautaro Conte**

- Website: https://contelautaro.com.ar
- Github: [@lauticonte](https://github.com/lauticonte)
- LinkedIn: [@lautaroconte](https://linkedin.com/in/lautaroconte)
