import React from "react";
import {Link} from "react-router-dom";
import classes from './NavLink.module.scss';
import {Constants} from "../../values/Constants";
import {motion} from 'framer-motion'

export default function NavLink() {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    return (
        <ul className={classes.Items}>
            <motion.li initial={animateFrom} animate={animateTo} className={classes.Item}><Link to="/" className={classes.Link}>{Constants.Splash}</Link></motion.li>
            <motion.li initial={animateFrom} animate={animateTo} className={classes.Item}><Link to="/product" className={classes.Link}>{Constants.Product}</Link></motion.li>
            <motion.li initial={animateFrom} animate={animateTo} className={classes.Item}><Link to="/product/laptop" className={classes.Link}>{Constants.Laptop}</Link></motion.li>
            <motion.li initial={animateFrom} animate={animateTo} className={classes.Item}><Link to="/product/camera" className={classes.Link}>{Constants.Camera}</Link></motion.li>
            <motion.li initial={animateFrom} animate={animateTo} className={classes.Item}><Link to="/product/watch" className={classes.Link}>{Constants.Watch}</Link></motion.li>
            <motion.li initial={animateFrom} animate={animateTo} className={classes.Item}><Link to="/cartBox" className={classes.Link}>{Constants.Cart}</Link></motion.li>
        </ul>
    )
}