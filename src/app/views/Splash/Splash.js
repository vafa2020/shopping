import classes from "./Splash.module.scss";
import BasicLayout from "../../Layout/Basic.layout";
import { Constants } from "../../values/Constants";
import {
  CameraCanon01,
  LaptopAcer01,
  WatchApple01,
  WatchApple02,
} from "../../values/Files";
import { Link } from "react-router-dom";
import { RiTruckFill } from "react-icons/ri";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import ServicesUs from "../../Components/ServicesUs/ServicesUs";
import DiscountProduct from "../../Components/DiscountProduct/DiscountProduct";
import CardViewProduct from "../../Components/CardViewProduct/CardViewProduct";

export default function Splash() {
  const ListServicesUs = [
    {
      icon: <FaCheckCircle />,
      title: Constants.ProductWarranty,
    },
    {
      icon: <RiTruckFill />,
      title: Constants.FastDelivery,
    },
    {
      icon: <FaMoneyBillAlt />,
      title: Constants.BestPrices,
    },
  ];
  const ListDiscountProduct = [
    {
      source: LaptopAcer01,
      title: "انواع لپ تاپ",
      description: ` پیشنهاد محدود تا 30% تخفیف`,
      category: "laptop",
    },
    {
      source: CameraCanon01,
      title: "انواع دوربین ها",
      description: `محصولات جدید حداکثر تا 40% تخفیف`,
      category: "camera",
    },
  ];
  const ListCardViewProduct = [
    {
      source: LaptopAcer01,
      title: "لپ تاپ",
      category: "laptop",
    },
    {
      source: CameraCanon01,
      title: "دوربین",
      category: "camera",
    },
    {
      source: WatchApple01,
      title: "ساعت",
      category: "watch",
    },
  ];
  return (
    <BasicLayout>
      <div className={classes.Splash}>
        <div className={classes.SectionOne}>
          <div className={classes.Description}>
            <h1 className={classes.Title}>{Constants.digitalRevolution}</h1>
            <p className={classes.Paragraph}>{Constants.Paragraph}</p>
          </div>
        </div>
        <div className={classes.SectionTwo}>
          <ServicesUs ListServicesUs={ListServicesUs} />
        </div>
        <div className={classes.SectionThree}>
          <DiscountProduct ListDiscountProduct={ListDiscountProduct} />
        </div>
        <div className={classes.SectionFour}>
          <CardViewProduct ListCardViewProduct={ListCardViewProduct} />
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
            <img className={classes.Image} src={WatchApple02} alt="Laptop" />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
