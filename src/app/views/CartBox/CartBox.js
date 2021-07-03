import classes from './CartBox.module.scss'
import BasicLayout from "../../Layout/Basic.layout";
import {useContext, useEffect, useState} from "react";
import {Helper} from "scriptpack";
import {AiOutlineMinus, AiOutlinePlus, BsTrash} from "react-icons/all";
import {StateManagement} from "../../utils/StateManagment";
import {Link} from "react-router-dom";


export default function CartBox() {
    const {stateManager, setStateManager} = useContext(StateManagement)
    const [data, setData] = useState([]);
    const [Cp, setCp] = useState();
    const [ID, setID] = useState();
    useEffect(() => {
        setData(
            stateManager.cartProducts?.map(cp => stateManager.products.find(p => p.id === cp.id))
        )
    }, [stateManager])


    useEffect(() => {

        stateManager.cartProducts.map(item => {
            if (item.id === ID) {
                setCp(item)
            }
            return item
        })
    }, [stateManager])

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
                                item.qty -= 1
                            }
                        }
                        return item;
                    })
                    .filter(cp => cp.qty > 0)
            }
        )
    }

    return (
        <BasicLayout>
            <div className={classes.Container}>
                {
                    data?.map((item, index) => (
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
                                        <span className={classes.Quantity}>1</span>
                                        <button className={classes.Mines} onClick={() => {
                                            minus(item.id)
                                        }}><AiOutlineMinus/></button>
                                    </div>
                                </div>
                                <button onClick={() => {
                                    Trash(item.id)
                                }} className={classes.Trash}><BsTrash/></button>
                            </div>
                        )
                    )
                }
            </div>
        </BasicLayout>
    )
}
