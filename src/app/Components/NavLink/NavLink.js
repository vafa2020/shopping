import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavLink.module.scss";
import { Constants } from "../../values/Constants";

const LinkData = [
  { to: "/", value: Constants.Splash },
  { to: "/product", value: Constants.Product },
  { to: "/product/laptop", value: Constants.Laptop },
  { to: "/product/camera", value: Constants.Camera },
  { to: "/product/watch", value: Constants.Watch },
];
export default function NavLink({ setOpen, open }) {
  return (
    <ul className={classes.Items}>
      {LinkData.map((link, index) => (
        <li
          key={index}
          className={classes.Item}
          // onClick={()=>setOpen(!open)}
      
        >
          <Link to={link.to} className={classes.Link}>
            {link.value}
          </Link>
        </li>
      ))}
    </ul>
  );
}
