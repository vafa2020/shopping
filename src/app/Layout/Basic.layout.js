import React from "react";
import {Link} from "react-router-dom";
import classes from './Basic.layout.module.scss'
import Navigation from "../Components/Navigation/Navigation";
import {Logo} from "../values/Files";
import Footer from "../Components/Footer/Footer";
import CartBoxHeader from "../Components/CartBoxHeader/CartBoxHeader";


export default function BasicLayout(props) {
    return (
        <div className={classes.BasicLayout}>

            <header className={classes.Header}>
                <Navigation/>
                <CartBoxHeader/>
                <div className={classes.BoxLogo}>
                    <Link to="/">
                        <img className={classes.Logo} src={Logo} alt=""/>
                    </Link>
                </div>
            </header>
            <div className={'container'}>
                <main className={classes.Main}>
                    {props.children}
                </main>
            </div>
            <footer className={classes.Footer}>
                <Footer/>
            </footer>
        </div>
    )
}
