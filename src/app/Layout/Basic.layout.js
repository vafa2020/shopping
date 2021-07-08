import React from "react";
import {Link} from "react-router-dom";
import classes from './Basic.layout.module.scss'
import Navigation from "../Components/Navigation/Navigation";
import {Logo} from "../values/Files";
import Footer from "../Components/Footer/Footer";
import CartBoxHeader from "../Components/CartBoxHeader/CartBoxHeader";
import NavigationMobile from "../Components/NavigationMobile/NavigationMobile";


export default function BasicLayout(props) {

    return (
        <div className={classes.BasicLayout}>

            <div className={'row'}>
                <header className={classes.Header}>
                    <div className="col-md-8 col-xs-2">
                        <Navigation/>
                        <NavigationMobile/>
                    </div>
                    <div className="col-md-4 col-xs-10">
                        <div className={'row'}>
                            <div className={classes.Left}>
                                <div className="col-md-6 col-xs-6">
                                    <div className={classes.BoxCart}>
                                        <CartBoxHeader/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className={classes.BoxLogo}>
                                        <Link to="/">
                                            <img className={classes.Logo} src={Logo} alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>
            </div>

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
