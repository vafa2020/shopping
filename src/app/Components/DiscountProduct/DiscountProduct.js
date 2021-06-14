import classes from './DiscountProduct.module.scss';
import {Constants} from "../../values/Constants";
import {Link} from "react-router-dom";

export default function DiscountProduct({data}) {
    return (
        <div className={classes.DiscountProduct}>
            <div className={classes.DescriptionBox}>
                <h2 className={classes.Title}>
                    {data.title}
                </h2>
                <p className={classes.description}>
                    {data.description}
                </p>
                <Link to={`/product/${data.category}`}>
                    <button className={classes.Button}>{Constants.ShopNow}</button>
                </Link>
            </div>
            <div className={classes.ImageBox}>
                <img className={classes.Image} src={data.source} alt=""/>
            </div>
        </div>

    )
}