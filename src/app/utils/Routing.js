import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "../views/Splash/Splash";
import Product from "../views/Product/Product";
import CartBox from "../views/CartBox/CartBox";
import Login from "../views/Login/Login";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="cartBox" element={<CartBox />}></Route>
        <Route path="product/*" element={<Product />}>
          <Route path=":category" element={<Product />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
