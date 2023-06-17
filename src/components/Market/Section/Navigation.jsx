import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <li>
      <NavLink to={props.to}>{props.title}</NavLink>
    </li>
  );
};

const Navigation = () => {
  return (
    <div>
      <ul>
        <Nav to="/shop" title="Home" />
        <Nav to="/shop/shop-items" title="Shop" />
        <Nav to="/about-us" title="About" />
        <Nav to="/shop/cart" title="Cart" />
        <Nav to="/help" title="Contact" />
      </ul>
    </div>
  );
};

export default Navigation;
