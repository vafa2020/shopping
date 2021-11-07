import classes from "./ProductList.module.scss";
import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { FcLike } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import { Constants } from "../../values/Constants";
import { Helper } from "scriptpack";
import { BiHeart, HiOutlineBookmark } from "react-icons/all";
import { useProductAction } from "../../utils/StateManagerProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

export default function ProductList(props) {
  const navigate = useNavigate();
  const dispatch = useProductAction();
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const addToCart = () => {
    const isLogin = localStorage.getItem("login");
    if (isLogin === null) {
      navigate("/login");
    }
    dispatch({ type: "addToCart", value: props.data });
    toast.success(".کالای شما به سبد خرید افزوده شد");
  };
  const Like = () => {
    setLike(!like);
  };

  const Bookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className={classes.ProductList}>
      <div className={classes.Header}>
        <div className={classes.ImageBox}>
          <img className={classes.Image} src={props.data.source} alt="" />
        </div>
        <div className={classes.Control}>
          <button className={classes.Like} onClick={Like}>
            {like ? <FcLike /> : <BiHeart />}
          </button>
          <button className={classes.Bookmark} onClick={Bookmark}>
            {bookmark ? <FcBookmark /> : <HiOutlineBookmark />}
          </button>
        </div>
      </div>
      <div className={classes.Body}>
        <span className={classes.Title}>{props.data.title}</span>
        <div className={classes.Rating}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="simple-controlled" />
          </Box>
        </div>
        <span className={classes.Price}>
          {Helper.toCurrencyFormat(props.data.price)}
        </span>
        <button className={classes.button} onClick={addToCart}>
          {Constants.AddToCart}
        </button>
      </div>
      <ToastContainer rtl={true} />
    </div>
  );
}
