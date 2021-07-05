import React from "react";
import classes from './NavigationMobile.module.scss';
import NavLink from "../NavLink/NavLink";
import {CgMenuRound} from "react-icons/all";


export default function NavigationMobile() {

    return (

        <nav className={classes.NavigationMobile}>
            <CgMenuRound className={classes.Hamburger}  />
            <NavLink/>
        </nav>

    )
}