import classes from './CartBox.module.scss'
import BasicLayout from "../../Layout/Basic.layout";
import {useContext, useEffect, useState} from "react";
import {Helper} from "scriptpack";
import {AiOutlineMinus, AiOutlinePlus, BsTrash, FcFullTrash} from "react-icons/all";
import {StateManagement} from "../../utils/StateManagment";
import {Link} from "react-router-dom";
import {Constants} from "../../values/Constants";


export default function CartBox() {
    const {stateManager, setStateManager} = useContext(StateManagement)
    const [data, setData] = useState([]);
    const [TotalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setData(Data);
    }, [stateManager])
    useEffect(() => {
        setTotalPrice(calculator())
    }, [data])
    useEffect(() => {
        setStateManager(
            {
                ...stateManager,
                TotalPrice: TotalPrice
            }
        )
    }, [TotalPrice])

    const Data = () => {
        return stateManager.cartProducts?.map(cp => ({
            ...stateManager.products.find(p => p.id === cp.id),
            qty: cp.qty
        }))
    }
    const calculator = () => {
        return data.reduce((acc, cur) => {
            return acc + cur.price * cur.qty
        }, 0)
    }
    const Trash = (Id) => {
        const cartProducts = [...stateManager.cartProducts.filter(cp => cp.id !== Id)];
        setStateManager({
            ...stateManager,
            cartProducts
        })
    }
    const plus = (Id) => {
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
    const minus = (Id) => {
        setStateManager(
            {
                ...stateManager,
                cartProducts: stateManager.cartProducts
                    .map((item) => {
                        if (item.id === Id) {
                            if (item.qty > 1) {
                                item.qty--
                            }
                        }
                        return item;
                    })
            }
        )

    }

    return (
        <BasicLayout>
            <div className={classes.Container}>
                {
                    (data.length == '') ?
                        <div className={classes.Empty}>
                            <FcFullTrash className={classes.IconEmpty}/>
                            <span className={classes.textEmpty}>{Constants.Empty}</span>
                        </div>
                        :
                        data.map((item, index) => (
                            <div key={index} className={classes.Product}>
                                <Link to={`/productDetails/${item.id}`}>
                                    <img className={classes.Image} src={item.source} alt=""/>
                                </Link>
                                <div className={classes.Body}>
                                    <h2 className={classes.Title}>{item.title}</h2>
                                    <div className={classes.BoxPrice}>
                                        <span className={classes.Text}>قیمت</span>
                                        <span className={classes.Price}> {Helper.toCurrencyFormat(item.price)}</span>
                                    </div>
                                    <p className={classes.BoxColor}>
                                        <span className={classes.Text}>رنگ</span>
                                        <span className={classes.Color} style={{backgroundColor: item.color}}></span>
                                    </p>
                                    <div className={classes.PlusMines}>
                                        <button className={classes.Plus} onClick={() => {
                                            plus(item.id)
                                        }}><AiOutlinePlus/></button>
                                        <span className={classes.Quantity}>{item.qty}</span>
                                        <button className={classes.Mines} onClick={() => {
                                            minus(item.id)
                                        }}><AiOutlineMinus/></button>
                                    </div>

                                </div>
                                <button onClick={() => {
                                    Trash(item.id)
                                }} className={classes.Trash}><BsTrash/></button>

                            </div>
                        ))}
                {
                    (TotalPrice === 0) ?
                        ''
                        :
                        <div className={classes.BoxTotalPrice}>
                            <span className={classes.TotalPriceText}>{Constants.TotalPrice}</span>
                            <span className={classes.TotalPrice}>{Helper.toCurrencyFormat(TotalPrice)}</span>
                        </div>

                }

            </div>
        </BasicLayout>
    )
}
