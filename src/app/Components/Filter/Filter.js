import classes from "./Filter.module.scss";
import React, { useState } from "react";
import { UseFilterAction } from "../../utils/StateManagerFilter";

export default function Filter() {
  const dispatch = UseFilterAction();
  const [sortValue, setSortValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [modelValue, setModelValue] = useState("");
  const [rangPriceValue, setRangPriceValue] = useState(200000)
  const sortHandler = (event) => {
    console.log(event.target.value);
    dispatch({ type: "sort", sort: event.target.value });
    setSortValue(event.target.value);
  };
  const colorHandler = (event) => {
    console.log(event.target.value);
    dispatch({ type: "filterColor", color: event.target.value });
    dispatch({ type: "sort", sort: sortValue });
    setColorValue(event.target.value);
  };

  const modelHandler = (event) => {
    console.log(event.target.value);
    dispatch({ type: "filterModel", model: event.target.value });
    dispatch({ type: "filterColor", color: colorValue });
    dispatch({ type: "sort", sort: sortValue });
    setModelValue(event.target.value);
  };
  const rangPriceHandler = (event) => {
    console.log(event.target.value);
    // dispatch({type:"filterCategory",categroy : sdsd})

    dispatch({ type: "filterRangPrice", rangPrice: event.target.value });
    dispatch({ type: "filterModel", model: modelValue });
    dispatch({ type: "filterColor", color: colorValue });
    dispatch({ type: "sort", sort: sortValue });
    setRangPriceValue(event.target.value);
  };

  return (
    <div className={classes.Filter}>
      <div className={classes.FilterSort}>
        <h3 className={classes.Title}>مرتب سازی براساس قیمت</h3>
        <div className={classes.body}>
          <label className={classes.Label} htmlFor="sortByPrice">
            مرتب سازی
          </label>
          <select
            className={classes.Select}
            name="sortByPrice"
            value={sortValue}
            onChange={sortHandler}
          >
            <option value="asc">صعودی</option>
            <option value="desc">نزولی</option>
          </select>
        </div>
      </div>
      <div className={classes.FilterColor}>
        <h3 className={classes.Title}>مرتب سازی براساس رنگ</h3>
        <div className={classes.body}>
          <label className={classes.Label} htmlFor="sortByPrice">
            مرتب سازی
          </label>
          <select
            className={classes.Select}
            name="sortByPrice"
            value={colorValue}
            onChange={colorHandler}
          >
            <option value="">انتخاب کنید</option>
            <option value="white">سفید</option>
            <option value="black">سیاه</option>
            <option value="grey">خاکستری</option>
            <option value="silver">نقره ای</option>
            <option value="red">قرمز</option>
            <option value="blue">آبی</option>
            <option value="green">سبز</option>
            <option value="pink">صورتی</option>
            <option value="yellow">زرد</option>
            <option value="gold">طلایی</option>
          </select>
        </div>
      </div>
      <div className={classes.FilterModel}>
        <h3 className={classes.Title}>مرتب سازی براساس برند</h3>
        <div className={classes.body}>
          <label className={classes.Label} htmlFor="sortByPrice">
            مرتب سازی
          </label>
          <select
            className={classes.Select}
            name="sortByPrice"
            value={modelValue}
            onChange={modelHandler}
          >
            <option value="">انتخاب کنید</option>
            <option value="acer">acer</option>
            <option value="asus">asus</option>
            <option value="del">del</option>
            <option value="canon">canon</option>
            <option value="kodak">kodak</option>
            <option value="samsung">samsung</option>
            <option value="sony">sony</option>
            <option value="apple">apple</option>
            <option value="huawei">huawei</option>
          </select>
        </div>
      </div>
      <div className={classes.FilterPrice}>
        <h3 className={classes.Title}>براساس قیمت</h3>
        <div className={classes.body}>
          <div className={classes.InputPrice}>
            <input
              type="range"
              max="70000000"
              min="2000000"
              step="500000"
              value={rangPriceValue}
              onChange={rangPriceHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
