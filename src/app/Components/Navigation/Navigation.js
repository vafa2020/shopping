import classes from "./Navigation.module.scss"
import React from "react";
import NavLink from "../NavLink/NavLink";

export default function Navigation() {
  return (
    <nav className={classes.Navigation}>
      <NavLink />
    </nav>
  );
}
