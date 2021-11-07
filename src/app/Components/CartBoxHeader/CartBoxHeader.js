import classes from "./CartBoxHeader.module.scss";
import { GiShoppingCart } from "react-icons/gi";
import { useProduct } from "../../utils/StateManagerProduct";

export default function CartBoxHeader() {
  const state = useProduct();
  const cart = state.cart;
  return (
    <div className={classes.CartBoxHeader}>
      <GiShoppingCart className={classes.IconCart} />
      <span className={classes.CartCount}>
        {cart && cart.length && cart.filter((p) => p.quantity >= 1).length}
      </span>
    </div>
  );
}
