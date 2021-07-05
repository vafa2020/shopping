import React, {useState} from "react";
import classes from './NavigationMobile.module.scss';
import NavLink from "../NavLink/NavLink";
import {CgMenuRound} from "react-icons/all";


export default function NavigationMobile() {
const [open ,setOpen]=useState(false)
    return (

        <nav className={classes.NavigationMobile}>
            <CgMenuRound onClick={()=>{setOpen(!open)}} className={classes.Hamburger}  />
            {open &&
                <NavLink/>}
        </nav>

    )
}