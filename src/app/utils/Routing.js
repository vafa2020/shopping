import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Splash from "../views/Splash/Splash";
import Product from "../views/Product/Product";
import ProductDetails from "../views/ProductDetails/ProductDetails";
import {StateManagement} from "./StateManagment";
import {State} from "./State";
import CartBox from "../views/CartBox/CartBox";
import Login from "../views/Login/Login";
import Login2 from "../views/Login2/Login2";


export default function Routing() {
    const [stateManager, setStateManager] = useState(JSON.parse(localStorage.getItem('state')) || State)
    useEffect(()=>{
        localStorage.setItem('state',JSON.stringify(stateManager));
    },[stateManager])

    return (
        <Router>
            <Switch>
                <StateManagement.Provider value={{stateManager, setStateManager}}>
                    <Route path="/login2"><Login2/></Route>
                    <Route path="/login"><Login/></Route>
                    <Route path="/productDetails/:id"><ProductDetails/></Route>
                    <Route path="/product/:category"><Product/></Route>
                    <Route path="/cartBox"><CartBox/></Route>
                    <Route path="/product" exact><Product/></Route>
                    <Route path="/" exact><Splash/></Route>
                </StateManagement.Provider>
            </Switch>
        </Router>
    )
}