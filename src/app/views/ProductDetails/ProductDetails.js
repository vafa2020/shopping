import {StateManagement} from "../../utils/StateManagment";
import classes from './ProductDetails.module.scss'
import BasicLayout from "../../Layout/Basic.layout";
import {useContext, useEffect, useState} from "react";
import {getProducts} from "../../servics/Product.services";
import {useHistory, useParams} from "react-router-dom";
import {Helper} from "scriptpack";
import {GiShoppingCart} from "react-icons/gi";
import {Constants} from "../../values/Constants";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/all";


export default function ProductDetails() {
    let history = useHistory();
    const {stateManager, setStateManager} = useContext(StateManagement)
    const [data, setData] = useState({})
    const [Cp, setCp] = useState()
    let {id} = useParams()
    useEffect(() => {
        const cp = stateManager.cartProducts.find(cp => cp.id === +id)
        setCp(cp);
    }, [id, stateManager])


    useEffect(() => {
        setData(getProducts(id));
    }, [id])
    const AddToCart = (id) => {
        if (login()) {
            setStateManager(
                {
                    ...stateManager,
                    cartProducts: [
                        ...stateManager?.cartProducts,
                        {
                            id: +id,
                            qty: 1
                        }
                    ]

                }
            )
        } else {
            localStorage.setItem('lastPage', `/productDetails/${id}`)
            history.push('/login')
        }
    }
    const Plus = (Id) => {
        setStateManager(
            {
                ...stateManager,
                cartProducts: [
                    ...stateManager.cartProducts.map((item) => {
                        if (item.id === Id) {
                            item.qty += 1
                        }
                        return item;
                    })
                ],
            }
        )
    }
    const Minus = (Id) => {
        setStateManager(
            {
                ...stateManager,
                cartProducts: stateManager.cartProducts
                    .map((item) => {
                        if (item.id === Id) {
                            item.qty -= 1
                        }
                        return item;
                    })
                    .filter(cp => cp.qty > 0)
                ,
            }
        )
    }
    const login = () => {
        const db = localStorage.getItem('token');
        return db
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
                        (!Cp) ?
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
                                <span className={classes.Quantity}>{Cp.qty}</span>
                                <button className={classes.Mines} onClick={() => {
                                    Minus(data.id)
                                }}><AiOutlineMinus/></button>
                            </div>
                    }
                </div>
            </div>
        </BasicLayout>
    )
}