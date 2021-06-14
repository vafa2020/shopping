import classes from './Splash.module.scss'
import BasicLayout from "../../Layout/Basic.layout";
import {Constants} from "../../values/Constants";
import {CameraCanon01, LaptopAcer01, WatchApple01,WatchApple02} from "../../values/Files";
import {Link} from "react-router-dom";
import {RiTruckFill} from 'react-icons/ri';
import {FaMoneyBillAlt} from 'react-icons/fa';
import {FaCheckCircle} from 'react-icons/fa';
import ServicesUs from "../../Components/ServicesUs/ServicesUs";
import DiscountProduct from "../../Components/DiscountProduct/DiscountProduct";
import CardViewProduct from "../../Components/CardViewProduct/CardViewProduct";


export default function Splash() {
    const ListServicesUs = [
        {
            icon: <FaCheckCircle/>,
            title: Constants.ProductWarranty,
            description: Constants.ProductWarrantyDes
        },
        {
            icon: <RiTruckFill/>,
            title: Constants.FastDelivery,
            description: Constants.FastDeliveryDes
        },
        {
            icon: <FaMoneyBillAlt/>,
            title: Constants.BestPrices,
            description: Constants.BestPricesDes
        }

    ]
    const ListDiscountProduct =  [
        {
            source: LaptopAcer01,
            title: 'انواع لپ تاپ',
            description:` پیشنهاد محدود تا 30% تخفیف`,
            category:'laptop'

        },
        {
            source: CameraCanon01,
            title: 'انواع دوربین ها',
            description:`محصولات جدید حداکثر تا 40% تخفیف`,
            category:'camera'
        }
    ]
    const ListCardViewProduct = [
        {
            source: LaptopAcer01,
            title: 'انواع لپ تاپ',
            price:`20000000 تومان`,
            category:'laptop'
        },
        {
            source: CameraCanon01,
            title: 'انواع دوربین ها',
            price:`15000000 تومان`,
            category:'camera'
        },
        {
            source: WatchApple01,
            title: 'انواع ساعت ها',
            price:`5000000 تومان`,
            category:'watch'
        }
    ]
    return (
            <BasicLayout>
                <div className={classes.Splash}>
                    <div className={classes.SectionOne}>
                        <div className={classes.Description}>
                            <h1 className={classes.Title}>{Constants.ProductNew}</h1>
                            <p className={classes.Paragraph}>{Constants.Paragraph}</p>
                            <Link to="/product">
                                <button className={classes.Button}>{Constants.ShopNow}</button>
                            </Link>
                        </div>
                        <div className={classes.BoxImage}>
                            <img className={classes.Image} src={LaptopAcer01} alt="Laptop"/>
                        </div>
                    </div>
                    <div className={classes.SectionTwo}>
                        <div className={'row'}>
                            {
                                ListServicesUs.map((item,index)=>(
                                    <div key={index} className={'col-md-4 col-xs-12'}>
                                        <ServicesUs data={item}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={classes.SectionThree}>
                        <div className={'row'}>
                            {
                                ListDiscountProduct.map((item,index)=>(
                                    <div key={index} className={'col-md-6 col-xs-12'}>
                                        <DiscountProduct  data={item}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={classes.SectionFour}>
                        <div className={'row'}>
                            {
                                ListCardViewProduct.map((item,index)=>(
                                    <div key={index} className={'col-md-4 col-xs-12'}>
                                        <CardViewProduct data={item}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={classes.SectionFive}>
                        <div className={classes.Description}>
                            <h1 className={classes.Title}>جدیدترین ساعت های هوشمند</h1>
                            <p className={classes.Paragraph}>{Constants.Paragraph2}</p>
                            <Link to="/product/watch">
                                <button className={classes.Button}>{Constants.ShopNow}</button>
                            </Link>
                        </div>
                        <div className={classes.BoxImage}>
                            <img className={classes.Image} src={WatchApple02} alt="Laptop"/>
                        </div>
                    </div>
                </div>
            </BasicLayout>

    )
}