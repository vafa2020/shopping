import classes from './Footer.module.scss';
import {Constants} from "../../values/Constants";
import FooterNavigation from "../FooterNavigation/FooterNavigation";

export default function Footer() {

    return (
        <div className={classes.Footer}>
            <div className={classes.TopFooter}>
                <h2 className={classes.Title}>{Constants.Title}</h2>
                <h3 className={classes.SubTitle}>{Constants.SubTitle}</h3>
                <div className={classes.BoxSearch}>
                    <input className={classes.Search} type="text" placeholder={Constants.EmailAddress}/>
                    <button className={classes.Button}>{Constants.Subscribe}</button>
                </div>

            </div>
            <div className={classes.MiddleFooter}>
                <FooterNavigation/>
            </div>
            <div className={classes.bottomFooter}>
                <h2 className={classes.Author}>{Constants.WebsiteAuthor}</h2>
            </div>
        </div>
    )
}