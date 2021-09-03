import React from "react";
import classes from "./Basic.layout.module.scss";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/header/Header";

export default function BasicLayout(props) {
  return (
    <div className={classes.BasicLayout}>
      <Header />
      <div className={"container"}>{props.children}</div>
      <Footer />
    </div>
  );
}
