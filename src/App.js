// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import CartPage from './features/page/CartPage';

import Navbar from './features/navbar/Navbar';
import Home from './features/page/Home';
import Login from './features/page/Login';
import Signup from './features/page/Signup';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from './features/page/Checkout';
import Product from './features/page/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>
  },
  {
    path: "/product",
    element: <Product></Product>
  },
]);

function App() {
  return (
    // <div className="App">
    <>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
