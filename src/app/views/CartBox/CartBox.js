import classes from './CartBox.module.scss'
import BasicLayout from "../../Layout/Basic.layout";
import {useContext, useEffect, useState} from "react";
import {Helper} from "scriptpack";
import {BsTrash} from "react-icons/all";
import {StateManagement} from "../../utils/StateManagment";
import {Link} from "@material-ui/core";
import {CategoryData} from "../../data/Category.data";


export default function CartBox() {
    const {stateManager, setStateManager} = useContext(StateManagement)
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(stateManager.cartProducts?.map(cp => stateManager.products.find(p => p.id === cp.id)))
    }, [stateManager])

    const Cat = (ID) => {
     return  CategoryData.map(item=>{
           if (item.id===ID){
               const Item=item.latinTitle
               return Item
           }
       })

    }
    const Trash = (Id) => {
        const cartProducts = [...stateManager.cartProducts.filter(cp => cp.id !== Id)];
        setStateManager({
            ...stateManager,
            cartProducts
        })
    }

    return (
        <BasicLayout>
            <div className={classes.Container}>
                {
                    data?.map((item, index) => (
                            <div key={index} className={classes.Product}>
                                <Link to={`/product/${Cat(item.categoryId).join('')}`}>
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
