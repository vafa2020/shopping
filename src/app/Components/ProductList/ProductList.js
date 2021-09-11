import classes from "./ProductList.module.scss";
import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { FcLike } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Constants } from "../../values/Constants";
import { Helper } from "scriptpack";
import { BiHeart, HiOutlineBookmark } from "react-icons/all";
import { useProductAction } from "../../utils/StateManagerProduct";

export default function ProductList({ data }) {
  const dispatch=useProductAction()
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

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
          <img className={classes.Image} src={data.source} alt="" />
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
        <span className={classes.Title}>{data.title}</span>
        <div className={classes.Rating}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="simple-controlled"
            />
          </Box>
        </div>
        <span className={classes.Price}>
          {Helper.toCurrencyFormat(data.price)}
        </span>
        <Link to={`/cartBox/${data.id}`}>
          <button className={classes.button} onClick={()=>dispatch({type:"addToCart",value:data.id})} >{Constants.AddToCart}</button>
        </Link>
      </div>
    </div>
  );
}
