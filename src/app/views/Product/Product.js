import classes from './Product.module.scss'
import BasicLayout from "../../Layout/Basic.layout";
import Filter from "../../Components/Filter/Filter";
import ProductList from "../../Components/ProductList/ProductList";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Category} from "../../servics/Product.services";
import {StateManagement} from "../../utils/StateManagment";




export default function Product() {
    const {stateManager, setStateManager} = useContext(StateManagement)
    let {category} = useParams();
    let [data, setData] = useState([]);
    useEffect(() => {
        console.log(stateManager.products)
        setData(Category(category,stateManager.products));
    }, [category,stateManager]);

    return (
        <BasicLayout>
            <div className={classes.Product}>
                <div className={'row'}>
                    <div className={'col-md-3 col-xs-12'}>
                        <Filter />
                    </div>
                    <div className={'col-md-9'}>
                        <div className={'row'}>
                            {
                                data.map((item, index) => (
                                    <div key={index} className={'col-md-4 col-xs-12'}>
                                        <ProductList data={item}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    )
}