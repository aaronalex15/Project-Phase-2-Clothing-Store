import React from "react";
import { Route } from "react-router-dom";
import Splash from "./pages/Splash";
import ProductPage from "./components/ProductPage";
const routes = [
  {
    path: "/",
    element: <Splash />
  },
  {
    path: "/shop",
    element: <ProductPage />
  }
];

export default routes;