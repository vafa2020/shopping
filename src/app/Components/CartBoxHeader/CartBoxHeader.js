import classes from "./CartBoxHeader.module.scss";
import { GiShoppingCart } from "react-icons/gi";
import { useProduct, useProductAction } from "../../utils/StateManagerProduct";
import { useEffect, useState } from "react";

export default function CartBoxHeader() {
  const product = useProduct();
  console.log(product);
  const dispatch = useProductAction();
  useEffect(() => {
    dispatch({ type: "singleProduct" });
  }, []);

  return (
    <div className={classes.CartBoxHeader}>
      <GiShoppingCart className={classes.IconCart} />
      <span className={classes.CartCount}>
        {product.filter((p) => p.qty >= 1).length}
      </span>
    </div>
  );
}
