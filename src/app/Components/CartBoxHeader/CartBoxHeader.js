import classes from "./CartBoxHeader.module.scss";
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { StateManagement } from "../../utils/StateManagment";

export default function CartBoxHeader() {
  const { stateManager } = useContext(StateManagement);

  return (
    <div className={classes.CartBoxHeader}>
      <GiShoppingCart className={classes.IconCart} />
      <span className={classes.CartCount}>
        {stateManager.cartProducts?.length}
      </span>

    </div>
  );
}
