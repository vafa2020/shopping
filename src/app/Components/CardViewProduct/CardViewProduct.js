import classes from './CardViewProduct.module.scss';
import {Helper} from "scriptpack";
import {Link} from "react-router-dom";
import React from "react";
export default function CardViewProduct({data}) {
    const currency  = Helper.toCurrencyFormat(data.price);

    return (
        <div className={classes.CardViewProduct}>
            <div className={classes.ImageBox}>
                <img className={classes.Image} src={data.source} alt=""/>
            </div>
            <div className={classes.Description}>
                <h2 className={classes.Title}>{data.title}</h2>
                <span className={classes.Price}>{currency}</span>
                <Link to={`/product/${data.category}`}>
                <button className={classes.Button}>نمایش دیگر محصولات</button>
                </Link>
            </div>

        </div>

    )
}