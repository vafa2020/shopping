import _ from "lodash";
import { createContext } from "react";
import { ProductDataList } from "../data/Product.data";
import { useContext, useReducer } from "react";
import { CategoryData } from "../data/Category.data";

const filterContext = createContext();
const filterContextDispatch = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "singleProduct": {
      const getItem = JSON.parse(localStorage.getItem("product"));
      return getItem;
    }
    case "addToCart": {
      const index = ProductDataList.findIndex((p) => p.id === action.value);
      const selectObject = { ...ProductDataList[index] };
      const item = { id: action.value, qty: 1 };
      const Product = [{ ...selectObject, ...item }];
      localStorage.setItem("product", JSON.stringify(Product));
    }
    case "increment": {
      const getItem = JSON.parse(localStorage.getItem("product"));
     console.log(getItem);
    }

    case "decrement": {
      const index = ProductDataList.findIndex((p) => p.id === action.value);
      const selectObject = { ...ProductDataList[index] };
      if (selectObject.qty === 1) {
        const deleteObject = ProductDataList.filter(
          (p) => p.id !== action.value
        );
        return deleteObject;
      }
      selectObject.qty--;
      const updateProduct = [...ProductDataList];
      updateProduct[index] = selectObject;
      return updateProduct;
    }
    case "delete": {
      const deleteProduct = ProductDataList.filter(
        (p) => p.id !== action.value
      );
      return deleteProduct;
    }
    case "sort": {
      const priceProduct = [...state];
      if (!action.type) {
        return priceProduct;
      } else if (action.sort === "asc") {
        return _.orderBy(priceProduct, ["price"], ["desc"]);
      }
      return _.orderBy(priceProduct, ["price"], ["asc"]);
    }
    case "filterColor": {
      const cloneProduct = [...state];
      if (!action.color) {
        return cloneProduct;
      }
      const filteredColor = cloneProduct.filter(
        (p) => p.color === action.color
      );
      return filteredColor;
    }
    case "filterModel": {
      const updateProduct = [...state];
      if (!action.model) {
        return updateProduct;
      }
      const filteredModel = updateProduct.filter(
        (p) => p.model === action.model
      );
      return filteredModel;
    }
    case "filterRangPrice": {
      const cloneProduct = [...state];
      const filterdrangPrice = cloneProduct.filter(
        (p) => p.price <= action.rangPrice
      );
      return filterdrangPrice;
    }
    case "filterCategory": {
      if (!action.category) return ProductDataList;
      const categoryItem = CategoryData.find(
        (x) => x.latinTitle === action.category
      );
      return ProductDataList.filter((p) => p.categoryId === categoryItem.id);
    }
    default:
      return ProductDataList;
  }
};

const StateManagerProduct = ({ children }) => {
  const [product, dispatch] = useReducer(reducer, ProductDataList);

  return (
    <filterContext.Provider value={product}>
      <filterContextDispatch.Provider value={dispatch}>
        {children}
      </filterContextDispatch.Provider>
    </filterContext.Provider>
  );
};
export default StateManagerProduct;

export const useProduct = () => useContext(filterContext);
export const useProductAction = () => useContext(filterContextDispatch);

// color : yellow => ? All => 100
// color : yellow => phone : 30
// state : products : 1000
// sort, filter, remove,price,...
// state : 100 => category, inc , dec, search ,...