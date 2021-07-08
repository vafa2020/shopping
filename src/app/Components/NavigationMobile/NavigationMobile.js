import React, {useState} from "react";
import classes from './NavigationMobile.module.scss';
import NavLink from "../NavLink/NavLink";
import {CgCloseO, CgMenuRound} from "react-icons/all";


export default function NavigationMobile() {
    const [open, setOpen] = useState(false)
    const openIcon = <CgMenuRound onClick={() => {
        setOpen(!open)
    }} className={classes.Hamburger}/>
    const closeIcon = <CgCloseO onClick={() => {
        setOpen(!open)
    }} className={classes.Hamburger}/>
    return (
        <nav className={classes.NavigationMobile}>
            {open ? closeIcon : openIcon}
            {open && <NavLink />}
        </nav>

    )
}