import React, { useState } from "react";
import classes from "./NavigationMobile.module.scss";
import { CgCloseO, CgMenuRound } from "react-icons/all";
import NavLinkMobile from "../NavLink/NavLinkMobile";

export default function NavigationMobile() {
  const [open, setOpen] = useState(false);
  const openIcon = (
    <CgMenuRound
      onClick={() => {
        setOpen(!open);
      }}
      className={classes.Hamburger}
    />
  );
  const closeIcon = (
    <CgCloseO
      onClick={() => {
        setOpen(!open);
      }}
      className={classes.Hamburger}
    />
  );
  return (
    <nav className={classes.NavigationMobile}>
      {open ? closeIcon : openIcon}
      {open && <NavLinkMobile setOpen={setOpen} open={open}/>}
    </nav>
  );
}
