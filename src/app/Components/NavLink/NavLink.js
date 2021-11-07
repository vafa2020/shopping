import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavLink.module.scss";
import { Constants } from "../../values/Constants";

const LinkData = [
  { to: "laptop", value: Constants.Laptop },
  { to: "camera", value: Constants.Camera },
  { to: "watch", value: Constants.Watch },
];
export default function NavLink() {
  return (
    <nav>
      <ul className={classes.Items}>
        <li className={classes.Item}>
          <Link to="/" className={classes.Link}>
            {Constants.Splash}
          </Link>
        </li>

        <li className={classes.Item}>
          <Link to="product" className={classes.Link}>
            <span>{Constants.Product}</span>
          </Link>

          <div className={classes.subNavigation}>
            <nav>
              <ul className={classes.subItems}>
                {LinkData.map((link, index) => (
                  <li key={index} className={classes.subItem}>
                    <Link to={link.to} className={classes.subLink}>
                      {link.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </li>
      </ul>
    </nav>
  );
}
