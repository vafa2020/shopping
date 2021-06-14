import classes from './FooterNavigation.module.scss'
import {Constants} from "../../values/Constants";
import {BrowserRouter as Router, Link} from "react-router-dom";
import React from "react";

export default function FooterNavigation() {

    return (
        <Router>
            <div className={classes.FooterNavigation}>
                <nav className={classes.Navigation}>
                    <ul className={classes.Items}>
                        <li className={classes.Item}><h2 className={classes.Title}>{Constants.About}</h2></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Company}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Location}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Contacts}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.OpeningHours}</Link></li>
                    </ul>
                </nav>
                <nav className={classes.Navigation}>
                    <ul className={classes.Items}>
                        <li className={classes.Item}><h2 className={classes.Title}>{Constants.UseFulLinks}</h2></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Help}</Link>
                        </li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.PrivacyPloicy}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.TermsAndConditions}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.FAQ}</Link>
                        </li>
                    </ul>
                </nav>
                <nav className={classes.Navigation}>
                    <ul className={classes.Items}>
                        <li className={classes.Item}><h2 className={classes.Title}>{Constants.CustomerServie}</h2></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.PaymentMethods}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.MoneyBack}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Returns}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Shipping}</Link></li>
                    </ul>
                </nav>
                <nav className={classes.Navigation}>
                    <ul className={classes.Items}>
                        <li className={classes.Item}><h2 className={classes.Title}>{Constants.JoinUs}</h2></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Twitter}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Facebook}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Instagram}</Link></li>
                        <li className={classes.Item}><Link className={classes.Link}
                                                           to={'#'}>{Constants.Linkedin}</Link></li>
                    </ul>
                </nav>
            </div>
        </Router>
    )
}