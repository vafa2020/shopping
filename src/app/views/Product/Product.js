import classes from "./Product.module.scss";
import BasicLayout from "../../Layout/Basic.layout";
import ProductList from "../../Components/ProductList/ProductList";
import FilterMobile from "../../Components/FilterMobile/FilterMobile";
import FilterDesktop from "../../Components/FilterDesktop/FilterDesktop";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct, useProductAction } from "../../utils/StateManagerProduct";

const Product = () => {
  const dispatch = useProductAction();
  const product = useProduct();
  const [products, setProducts] = useState(product);
  const { category } = useParams();
  useEffect(() => {
    setProducts(product);
  }, [product]);
  useEffect(() => {
    dispatch({ type: "filterCategory", category });
  }, [category]);


  return (
    <BasicLayout>
      <div className={classes.Product}>
        <div className={classes.filters}>
          <FilterMobile />
          <FilterDesktop />
        </div>
        <div className={classes.productCenter}>
          {products?.map((item) => (
            <ProductList key={item.id} data={item} />
          ))}
        </div>
      </div>
    </BasicLayout>
  );
};
export default Product;

// allProducts => filter category : All,mobile,...
// state => 30 => color : yellow => state.filter(p => p.color === "yelllow")
