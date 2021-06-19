import {StateManagement} from "../../utils/StateManagment";
import classes from './ProductDetails.module.scss'
import BasicLayout from "../../Layout/Basic.layout";
import {useContext, useEffect, useState} from "react";
import {getProducts} from "../../servics/Product.services";
import {useParams} from "react-router-dom";
import {Helper} from "scriptpack";
import {GiShoppingCart} from "react-icons/gi";
import {Constants} from "../../values/Constants";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/all";


export default function ProductDetails() {
    const {stateManager, setStateManager} = useContext(StateManagement)
    const [data, setData] = useState({})
    // const [plus, setPlus] = useState();
    // const [minus, setMinus] = useState()
    let {id} = useParams()
    useEffect(() => {
        setData(getProducts(id));

    }, [id])
    const Plus = (Id) => {
        setStateManager(
            {
                ...stateManager,
                quantity: ++stateManager.quantity,
                cartProducts: [
                    // ...stateManager.cartProducts,
                    ...stateManager.cartProducts.map((item, index) => {
                        if (item.id === Id) {
                            item.qty += 1
                            console.log(item)
                        }
                        return item;
                    })
                ],
            }
        )
    }
    const Minus = () => {
        setStateManager({
            ...stateManager,
            quantity: --stateManager.quantity
        })
    }
    const AddToCart = (id) => {
        setStateManager(
            {
                ...stateManager,
                quantity: ++stateManager.quantity,
                cartProducts: [
                    ...stateManager?.cartProducts,
                    {
                        id: +id,
                        qty: stateManager.quantity
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
                    {
                        (stateManager.quantity === 0) ?
                            <div className={classes.Control}>
                                <button className={classes.AddToCart} onClick={() => AddToCart(data.id)}>
                                    <span className={classes.IconCart}><GiShoppingCart/></span>
                                    <span className={classes.TextCart}>{Constants.AddToCart}</span>
                                </button>
                            </div>
                            :
                            <div className={classes.PlusMines}>
                                <button className={classes.Plus} onClick={() => {
                                    Plus(data.id)
                                }}><AiOutlinePlus/></button>
                                <span className={classes.Quantity}>{stateManager.quantity}</span>
                                <button className={classes.Mines} onClick={Minus}><AiOutlineMinus/></button>
                            </div>
                    }
                </div>
            </div>

        </BasicLayout>
    )
}