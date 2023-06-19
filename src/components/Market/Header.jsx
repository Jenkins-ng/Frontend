import React from "react";
import Logo from "../Landing page/Header/Logo";
import "./Header.css";
import { useStateValue } from "../../Store/StateProvider";

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="Header bg-black">
      <Logo />
      <div className="header__search">
        <input type="text" name="" id="" />
        <button type="submit">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <div>
        <div>
          <span>Hello Guest</span>
          <span>Sign In</span>
        </div>
        <div>
          <span>Hello Guest</span>
          <span>Sign In</span>
        </div>
        <div>
          <span>Hello Guest</span>
          <span>Sign In</span>
        </div>
        <div>
          <span className="material-symbols-outlined">cart</span>
          <span>{cart?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
