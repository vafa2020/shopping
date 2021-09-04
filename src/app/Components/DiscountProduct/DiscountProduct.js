import classes from "./DiscountProduct.module.scss";
import { Constants } from "../../values/Constants";
import { Link } from "react-router-dom";

export default function DiscountProduct({ ListDiscountProduct }) {
  return (
    <>
      {ListDiscountProduct.map((item, index) => (
        <div className={classes.DiscountProduct}>
          <div className={classes.ImageBox}>
            <img className={classes.Image} src={item.source} alt="" />
          </div>
          <div key={index} className={classes.DescriptionBox}>
            <p className={classes.description}>{item.description}</p>
            <Link to={`/product/${item.category}`}>
              <button className={classes.Button}>{Constants.ShopNow}</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
