import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import CartBoxHeader from "../CartBoxHeader/CartBoxHeader";
import NavigationMobile from "../NavigationMobile/NavigationMobile";
import { Logo } from "../../values/Files";
const Header = () => {
  return (
    <header className={classes.Header}>
      <Navigation />
      <NavigationMobile />
      <Link to="/cartBox">
        <CartBoxHeader />
      </Link>
      <Link to="/">
        <img className={classes.Logo} src={Logo} alt="" />
      </Link>
    </header>
  );
};
export default Header;
