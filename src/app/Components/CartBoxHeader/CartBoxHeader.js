import classes from './CartBoxHeader.module.scss'
import {GiShoppingCart} from "react-icons/gi";
import {useContext} from "react";
import {StateManagement} from "../../utils/StateManagment";

export default function CartBoxHeader() {
    const {stateManager, setStateManager} = useContext(StateManagement)

    return (
        <div className={classes.CartBoxHeader}>
            <div className={classes.CartCount}>
                {stateManager.cartProducts?.length}
            </div>
            <div className={classes.IconCart}>
                <GiShoppingCart/>
            </div>

        </div>
    )
}