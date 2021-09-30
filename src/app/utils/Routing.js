import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "../views/Splash/Splash";
import Product from "../views/Product/Product";
import CartBox from "../views/CartBox/CartBox";
import Login from "../views/Login/Login";
import StateManagerProduct from "./StateManagerProduct";

export default function Routing() {
  return (
    <StateManagerProduct>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product/:category">
            <Product />
          </Route>
          <Route path="/cartBox">
            <CartBox />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/" exact>
            <Splash />
          </Route>
        </Switch>
      </Router>
    </StateManagerProduct>
  );
}
