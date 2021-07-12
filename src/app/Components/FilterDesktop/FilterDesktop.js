import classes from './FilterDesktop.module.scss'
import React from "react";
import Filter from "../Filter/Filter";

export default function FilterDesktop() {

    return (
        <div className={classes.FilterDesktop}>
            <Filter/>
        </div>
    )
}
