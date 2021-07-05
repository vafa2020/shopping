import React from "react";
import {Link} from "react-router-dom";
import classes from './NavLink.module.scss';
import {Constants} from "../../values/Constants";


export default function NavLink() {
    return (
        <ul className={classes.Items}>
            <li className={classes.Item}><Link to="/" className={classes.Link}>{Constants.Splash}</Link></li>
            <li className={classes.Item}>
                <Link to={'/product'} className={classes.Link}>
                    {Constants.Product}
                </Link>
            </li>
            <li className={classes.Item}><Link to="/product/laptop"
                                               className={classes.Link}>{Constants.Laptop}</Link></li>
            <li className={classes.Item}><Link to="/product/camera"
                                               className={classes.Link}>{Constants.Camera}</Link></li>
            <li className={classes.Item}><Link to="/product/watch" className={classes.Link}>{Constants.Watch}</Link>
            </li>
            <li className={classes.Item}><Link to='/cartBox' className={classes.Link}>{Constants.Cart}</Link></li>
        </ul>
    )
}