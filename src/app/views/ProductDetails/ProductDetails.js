import classes from './ProductDetails.module.scss'
import BasicLayout from "../../Layout/Basic.layout";
import {useContext, useEffect, useState} from "react";
import {getProducts} from "../../servics/Product.services";
import {useParams} from "react-router-dom";
import {Helper} from "scriptpack";
import {StateManagement} from "../../utils/StateManagment";
import {GiShoppingCart} from "react-icons/gi";
import {Constants} from "../../values/Constants";


export default function ProductDetails() {
    const [data, setData] = useState({})
    let {id} = useParams()
    useEffect(() => {
        setData(getProducts(id));
    }, [id])
    const {stateManager, setStateManager} = useContext(StateManagement)
    const AddToCart = (id) => {

        setStateManager(
            {
                ...stateManager,
                //cartCount: ++stateManager.cartCount,
                cartProducts: [
                    ...stateManager?.cartProducts,
                    {
                        id: +id,
                        qty: 1
                    }
                ]
            }
        )
    }

    return (
        <BasicLayout>
            <div className={classes.ProductDetails}>
                <div className={classes.ImageBox}>
                    <img className={classes.Image} src={data.source} alt=""/>
                </div>
                <div className={classes.Body}>
                    <h2 className={classes.Title}>{data.title}</h2>
                    <div className={classes.BoxPrice}>
                        <span className={classes.Text}>قیمت</span>
                        <span className={classes.Price}> {Helper.toCurrencyFormat(data.price)}</span>
                    </div>
                    <p className={classes.BoxColor}>
                        <span className={classes.Text}>رنگ</span>
                        <span className={classes.Color}>{data.color}</span>
                    </p>
                    <div className={classes.Control}>
                        <button className={classes.AddToCart} onClick={() => AddToCart(data.id)}>
                            <span className={classes.IconCart}> <GiShoppingCart/></span>
                            <span className={classes.TextCart}>{Constants.AddToCart}</span>
                        </button>

                    </div>
                </div>
            </div>

        </BasicLayout>
    )
}