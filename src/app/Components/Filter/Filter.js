import classes from './Filter.module.scss'
import React, {useContext, useEffect, useState} from "react";
import {StateManagement} from "../../utils/StateManagment";
import {ProductDataList} from "../../data/Product.data";

export default function Filter() {
    const {stateManager, setStateManager} = useContext(StateManagement);
    const [type, setType] = useState();
    const [color, setColor] = useState();
    const [brand, setBrand] = useState();
    const [range, setRange] = useState();
    const applyFilter = (type, color, brand, range) => {
        function compare(a, b) {
            if (type === 0) return 0;

            if (a.price < b.price) {
                return type * -1;
            }
            if (a.price > b.price) {
                return type;
            }
            return 0;
        }

        const sortData = ProductDataList.sort(compare);
        const colorData = color ? sortData.filter(p => p.color === color) : sortData;
        const brandData = brand ? colorData.filter(p => p.model === brand) : colorData;
        const rangeData = range ? brandData.filter(p => p.price >= range) : brandData
        const data = rangeData;
        setStateManager({
            ...stateManager,
            products: data
        });

    }
    useEffect(()=>{
        applyFilter(type, color, brand, range)
    },[type, color, brand, range])


    return (
        <div className={classes.Filter}>
            <div className={classes.FilterSort}>
                <h3 className={classes.Title}>مرتب سازی براساس قیمت</h3>
                <div className={classes.body}>
                    <label className={classes.Label} htmlFor="sortByPrice">مرتب سازی</label>
                    <select className={classes.Select} name="sortByPrice" id="sortByPrice" onChange={(e) => {
                        applyFilter(setType(e.target.value))
                    }}>
                        <option value="0">انتخاب کنید</option>
                        <option value="1">صعودی</option>
                        <option value="-1">نزولی</option>
                    </select>
                </div>
            </div>
            <div className={classes.FilterColor}>
                <h3 className={classes.Title}>مرتب سازی براساس رنگ</h3>
                <div className={classes.body}>
                    <label className={classes.Label} htmlFor="sortByPrice">مرتب سازی</label>
                    <select className={classes.Select} name="sortByPrice" id="sortByPrice" onChange={(e) => {
                        applyFilter(setColor(e.target.value))
                    }}>
                        <option value="null">انتخاب کنید</option>
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
                    <label className={classes.Label} htmlFor="sortByPrice">مرتب سازی</label>
                    <select className={classes.Select} name="sortByPrice" id="sortByPrice" onChange={(e) => {
                        applyFilter(setBrand(e.target.value))
                    }}>
                        <option value="null">انتخاب کنید</option>
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
                            max={'70000000'}
                            min={'1000000'}
                            step={'500000'}
                            onChange={(e) => {
                                applyFilter(setRange(e.target.value))
                            }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

hi