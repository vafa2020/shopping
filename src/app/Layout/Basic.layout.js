import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import classes from './Basic.layout.module.scss'
import Navigation from "../Components/Navigation/Navigation";
import {Logo} from "../values/Files";
import Footer from "../Components/Footer/Footer";
import CartBoxHeader from "../Components/CartBoxHeader/CartBoxHeader";
import {GiHamburgerMenu} from "react-icons/all";


export default function BasicLayout(props) {
    const [isClose, setIsClose] = useState(true);
    const nav=props.ref
    const menuHamburger = () => {
        if (isClose) {
            nav.classList.add('active');
            setIsClose(false)
        }else {
            nav.classList.remove('active')
            setIsClose(true)
        }
    }
    return (
        <div className={classes.BasicLayout}>

            <header className={classes.Header}>
                <span onClick={menuHamburger} className={classes.HamburgerMenu}>
                    <GiHamburgerMenu/>
                </span>
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
