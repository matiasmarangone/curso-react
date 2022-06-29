import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div position="relative">
      <div>

        <a href='/' style={{ textDecoration: "none", color: "white" }}>QUICKBUY</a>

        <a href='/category/MbCjgT1qxGT28TQHIDxs' style={{ textDecoration: "none", color: "white" }}>cat 1</a>
        <a href='/category/WuwoOSINFxcXZiKm3R1x' style={{ textDecoration: "none", color: "white" }}>cat 2</a>
        <a href='/category/i3pqaIGbQs2vvEuquCw5' style={{ textDecoration: "none", color: "white" }}>cat 3</a>

        <a href='/cart' style={{ textDecoration: "none", color: "white" }}><CartWidget /></a>

      </div>
    </div>
  );
}

export default NavBar;