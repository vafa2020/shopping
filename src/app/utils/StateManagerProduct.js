import _ from "lodash";
import { createContext } from "react";
import { ProductDataList } from "../data/Product.data";
import { useContext, useReducer } from "react";
import { CategoryData } from "../data/Category.data";

const productContext = createContext();
const productContextDispatch = createContext();

const initialState = {
  cart: [],
  totalPrice: 0,
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.value.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.value, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        totalPrice: state.totalPrice + action.value.price,
      };
    }
    case "decrement": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.value.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.value.id
        );
        return {
          ...state,
          cart: filteredCart,
          totalPrice: state.totalPrice - action.value.price,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          totalPrice: state.totalPrice - action.value.price,
        };
      }
    }
    case "increment": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.value.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
      return {
        ...state,
        cart: updatedCart,
        totalPrice: state.totalPrice + action.value.price,
      };
    }
    case "filterCategory": {
      let updateProduct = [...state.products];
      if (!action.value) {
        updateProduct = ProductDataList.slice(0, 9);
        return {
          ...state,
          products: updateProduct,
        };
      }
      const categoryItem = CategoryData.find(
        (x) => x.latinTitle === action.value
      );
      updateProduct = ProductDataList.filter(
        (p) => p.categoryId === categoryItem.id
      );
      return {
        ...state,
        products: updateProduct,
      };
    }
    case "delete": {
      const updateCart = [...state.cart];
      if (state.cart.length === 1) {
        const removeCart = updateCart.filter((p) => p.id !== action.value.id);
        return {
          ...state,
          cart: removeCart,
          totalPrice: 0,
        };
      }
      const deleteProduct = updateCart.filter((p) => p.id !== action.value.id);
      return {
        ...state,
        cart: deleteProduct,
        totalPrice: state.totalPrice - action.value.price,
      };
    }
    case "sort": {
      let updateProduct = [...state.products];
      if (!action.sort) {
        return {
          ...state,
          products: updateProduct,
        };
      } else if (action.sort === "asc") {
        updateProduct = _.orderBy(state.products, ["price"], ["desc"]);
        return {
          ...state,
          products: updateProduct,
        };
      }
      updateProduct = _.orderBy(state.products, ["price"], ["asc"]);
      return {
        ...state,
        products: updateProduct,
      };
    }
    case "filterColor": {
      const cloneProduct = [...state.products];
      if (!action.color) {
        return {
          ...state,
          products: cloneProduct,
        };
      }
      const filteredColor = state.products.filter(
        (p) => p.color === action.color
      );
      return {
        ...state,
        products: filteredColor,
      };
    }
    case "filterModel": {
      const updateProduct = [...state.products];
      if (!action.model) {
        return {
          ...state,
          products: updateProduct,
        };
      }
      const filteredModel = updateProduct.filter(
        (p) => p.model === action.model
      );
      return {
        ...state,
        products: filteredModel,
      };
    }
    case "filterRangPrice": {
      const cloneProduct = [...state.products];
      const filterdrangPrice = cloneProduct.filter(
        (p) => p.price <= action.rangPrice
      );
      return {
        ...state,
        products: filterdrangPrice,
      };
    }

    default:
      return {
        cart: [],
        totalPrice: 0,
        products: [...ProductDataList.slice(-6)],
      };
  }
};

const StateManagerProduct = ({ children }) => {
  const [product, dispatch] = useReducer(reducer, initialState);

  return (
    <productContext.Provider value={product}>
      <productContextDispatch.Provider value={dispatch}>
        {children}
      </productContextDispatch.Provider>
    </productContext.Provider>
  );
};
export default StateManagerProduct;

export const useProduct = () => useContext(productContext);
export const useProductAction = () => useContext(productContextDispatch);
