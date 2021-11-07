import classes from "./CardViewProduct.module.scss";
import { Link } from "react-router-dom";
import React from "react";
export default function CardViewProduct({ ListCardViewProduct }) {
  return (
    <>
      {ListCardViewProduct.map((item, index) => (
        <div key={index} className={classes.CardViewProduct}>
          <img className={classes.Image} src={item.source} alt="" />
          <div className={classes.Description}>
            <h2 className={classes.Title}>{item.title}</h2>
            <nav>
              <Link to={item.category}>
                <button className={classes.Button}>نمایش دیگر محصولات</button>
              </Link>
            </nav>
          </div>
        </div>
      ))}
    </>
  );
}
