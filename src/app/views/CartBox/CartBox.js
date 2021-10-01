import classes from "./CartBox.module.scss";
import BasicLayout from "../../Layout/Basic.layout";
import { Helper } from "scriptpack";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  BsTrash,
  FcFullTrash,
} from "react-icons/all";
import { Link } from "react-router-dom";
import { Constants } from "../../values/Constants";
import { useProductAction } from "../../utils/StateManagerProduct";
import { useProduct } from "../../utils/StateManagerProduct";
import { useEffect } from "react";
export default function CartBox() {
  const dispatch = useProductAction();
  const { cart, totalPrice } = useProduct();
  useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(cart, totalPrice));
  }, [cart, totalPrice]);
  return (
    <BasicLayout>
      <div className={classes.Container}>
        {!cart ? (
          <div className={classes.Empty}>
            <FcFullTrash className={classes.IconEmpty} />
            <span className={classes.textEmpty}>{Constants.Empty}</span>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className={classes.Product}>
              <Link to={`/productDetails/${item.id}`}>
                <img className={classes.Image} src={item.source} alt="" />
              </Link>
              <div className={classes.Body}>
                <h2 className={classes.Title}>{item.title}</h2>
                <div className={classes.BoxPrice}>
                  <span className={classes.Text}>قیمت</span>
                  <span className={classes.Price}>
                    {Helper.toCurrencyFormat(item.price)}
                  </span>
                </div>
                <p className={classes.BoxColor}>
                  <span className={classes.Text}>رنگ</span>
                  <span
                    className={classes.Color}
                    style={{ backgroundColor: item.color }}
                  ></span>
                </p>
                <div className={classes.PlusMines}>
                  <button
                    className={classes.Plus}
                    onClick={() => {
                      dispatch({ type: "increment", value: item });
                    }}
                  >
                    <AiOutlinePlus />
                  </button>
                  <span className={classes.Quantity}>{item.quantity}</span>
                  <button
                    className={classes.Mines}
                    onClick={() => {
                      dispatch({ type: "decrement", value: item });
                    }}
                  >
                    <AiOutlineMinus />
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  dispatch({ type: "delete", value: item.id });
                }}
                className={classes.Trash}
              >
                <BsTrash />
              </button>
            </div>
          ))
        )}
        {totalPrice > 0 && (
          <div className={classes.BoxTotalPrice}>
            <span className={classes.TotalPrice}>
              {Helper.toCurrencyFormat(totalPrice)}
            </span>
            <span className={classes.TotalPriceText}>totalPrice</span>
          </div>
        )}
      </div>
    </BasicLayout>
  );
}
