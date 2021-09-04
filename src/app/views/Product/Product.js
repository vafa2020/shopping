import classes from "./Product.module.scss";
import BasicLayout from "../../Layout/Basic.layout";
import ProductList from "../../Components/ProductList/ProductList";
import PaginationCom from "../../Components/PaginationCom/Pagination";
import FilterMobile from "../../Components/FilterMobile/FilterMobile";
import FilterDesktop from "../../Components/FilterDesktop/FilterDesktop";
import { ProductDataList } from "../../data/Product.data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Category } from "../../servics/Product.services";

const Product = () => {
  const [products, setProducts] = useState(ProductDataList);
  const { category } = useParams();
  useEffect(() => {
    const res = Category(category, ProductDataList);
    setProducts(res);
  }, [category]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(6);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = products.slice(indexOfFirstData, indexOfLastData);

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
              totalData={products.length}
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
