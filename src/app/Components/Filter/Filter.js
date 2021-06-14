import classes from './Filter.module.scss'
import {useContext, useEffect, useRef, useState} from "react";
import {StateManagement} from "../../utils/StateManagment";
import {ProductDataList} from "../../data/Product.data";

export default function Filter() {
    const {stateManager, setStateManager} = useContext(StateManagement);
    const [type, setType] = useState();
    const [color, setColor] = useState();
    const [brand, setBrand] = useState();
    const fromPrice = useRef();
    const toPrice = useRef();

    const applyFilter = ()=>{
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

        let priceData = fromPrice.current.value ? brandData.filter(x => x.price >= fromPrice.current.value) : brandData;
        priceData = toPrice.current.value ? brandData.filter(x => x.price <= toPrice.current.value) : priceData;

        const data = priceData;
        console.log(data)
        setStateManager({
            ...stateManager,
            products: data
        });

    }

    useEffect(() => {
        applyFilter();
    }, []);


    return (
        <div className={classes.Filter}>
            <div className={classes.FilterSort}>
                <h3 className={classes.Title}>مرتب سازی براساس قیمت</h3>
                <div className={classes.body}>
                    <label className={classes.Label} htmlFor="sortByPrice">مرتب سازی</label>
                    <select className={classes.Select} name="sortByPrice" id="sortByPrice" onChange={(e) => {
                        setType(e.target.value)
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
                        setColor(e.target.value)
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
                        setBrand(e.target.value)
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
                        <label htmlFor="filterFromPrice" className={classes.Label}>از قیمت</label>
                        <input id="filterFromPrice" className={classes.Input} type="number" ref={fromPrice} onChange={applyFilter}/>
                    </div>
                    <div className={classes.InputPrice}>
                        <label htmlFor="filterToPrice" className={classes.Label}>تا قیمت</label>
                        <input id="filterToPrice" className={classes.Input} type="number" ref={toPrice} onChange={applyFilter}/>
                    </div>
                </div>
            </div>
        </div>
    )
}