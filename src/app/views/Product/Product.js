import classes from './Product.module.scss'
import BasicLayout from "../../Layout/Basic.layout";
import Filter from "../../Components/Filter/Filter";
import ProductList from "../../Components/ProductList/ProductList";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Category} from "../../servics/Product.services";
import {StateManagement} from "../../utils/StateManagment";
import PaginationCom from "../../Components/PaginationCom/Pagination";


export default function Product() {
    const {stateManager} = useContext(StateManagement)
    let {category} = useParams();
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(6)

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData)
    console.log(currentData)
    useEffect(() => {
        setData(Category(category, stateManager.products));
    }, [category, stateManager]);
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <BasicLayout>
            <div className={classes.Product}>
                <div className={'row'}>
                    <div className={'col-md-3 col-xs-12'}>
                        <Filter/>
                    </div>
                    <div className={'col-md-9'}>
                        <div className={'row'}>

                            {
                                currentData?.map((item, index) => (
                                    <div key={index} className={'col-md-4 col-xs-12'}>
                                        <ProductList data={item} dataPerPage={dataPerPage} />
                                    </div>
                                ))
                            }
                            <div className={classes.Main}>
                                <PaginationCom totalData={data.length} dataPerPage={dataPerPage} paginate={paginate}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    )
}