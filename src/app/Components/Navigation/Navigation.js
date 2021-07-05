import React from "react";
import classes from './Navigation.module.scss';
import NavLink from "../NavLink/NavLink";


export default function Navigation() {
    return (

        <nav className={classes.Navigation}>
            <NavLink/>
        </nav>

    )
}