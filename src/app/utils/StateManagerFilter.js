import _ from "lodash";
import { createContext } from "react";
import { ProductDataList } from "../data/Product.data";
import { useContext, useReducer } from "react";
import { CategoryData } from "../data/Category.data";

const filterContext = createContext();
const filterContextDispatch = createContext();

const reducer = (state, action) => {
  switch (action.type) {
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

const StateManagerFilter = ({ children }) => {
  const [product, dispatch] = useReducer(reducer, ProductDataList);

  return (
    <filterContext.Provider value={product}>
      <filterContextDispatch.Provider value={dispatch}>
        {children}
      </filterContextDispatch.Provider>
    </filterContext.Provider>
  );
};
export default StateManagerFilter;

export const UseFilter = () => useContext(filterContext);
export const UseFilterAction = () => useContext(filterContextDispatch);

// color : yellow => ? All => 100
// color : yellow => phone : 30
// state : products : 1000
// sort, filter, remove,price,...
// state : 100 => category, inc , dec, search ,...
