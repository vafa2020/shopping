import classes from "./Product.module.scss";
import BasicLayout from "../../Layout/Basic.layout";
import ProductList from "../../Components/ProductList/ProductList";
import FilterMobile from "../../Components/FilterMobile/FilterMobile";
import FilterDesktop from "../../Components/FilterDesktop/FilterDesktop";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct, useProductAction } from "../../utils/StateManagerProduct";

const Product = () => {
  const dispatch = useProductAction();
  const { products } = useProduct();

  const { category } = useParams();
  useEffect(() => {
    dispatch({ type: "filterCategory", value: category });
  }, [category]);

  return (
    <BasicLayout>
      <div className={classes.Product}>
        <div className={classes.filters}>
          <FilterMobile />
          <FilterDesktop />
        </div>
        <div className={classes.productCenter}>
          {products &&
            products.map((item) => <ProductList key={item.id} data={item} />)}
        </div>
      </div>
    </BasicLayout>
  );
};
export default Product;
