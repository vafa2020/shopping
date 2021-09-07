import classes from "./Product.module.scss";
import BasicLayout from "../../Layout/Basic.layout";
import ProductList from "../../Components/ProductList/ProductList";
import PaginationCom from "../../Components/PaginationCom/Pagination";
import FilterMobile from "../../Components/FilterMobile/FilterMobile";
import FilterDesktop from "../../Components/FilterDesktop/FilterDesktop";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseFilter, UseFilterAction } from "../../utils/StateManagerFilter";

const Product = () => {
  const dispatch = UseFilterAction();
  const product = UseFilter();
  const [products, setProducts] = useState(product);
  const { category } = useParams();
  useEffect(() => {
    setProducts(product);
  }, [product]);
  useEffect(() => {

    dispatch({ type: "filterCategory",  category });
  }, [category]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(6);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = products?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BasicLayout>
      <div className={classes.Product}>
        <div className={classes.filters}>
          <FilterMobile />
          <FilterDesktop />
        </div>
        <div className={classes.productCenter}>
          {currentData?.map((item) => (
            <ProductList key={item.id} data={item} />
          ))}
          <div className={classes.paginate}>
            <PaginationCom
              totalData={products?.length}
              dataPerPage={dataPerPage}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};
export default Product;

// allProducts => filter category : All,mobile,...
// state => 30 => color : yellow => state.filter(p => p.color === "yelllow")
