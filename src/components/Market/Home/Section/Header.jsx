import React, { useState, useContext } from "react";
import Logo from "../../../Landing page/Header/Logo";
import { Link, NavLink } from "react-router-dom";
import CTAtextcomponent from "../../../Landing page/CTA/CTAtextcomponent";
import Ctawrapper from "../../../Landing page/CTA/Ctawrapper";
import { CartContext } from "../../Context/Cart";

export const Modal = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute bg-slate-100 p-5 text-sm whitespace-nowrap rounded-lg">
        <ul>
          <li className="py-[4px] text-blue-400 hover:text-slate-500 font-medium">
            <Link to={"/profile"}>Manage Account</Link>
          </li>
          <li className="py-[4px] text-blue-400 hover:text-slate-500 font-medium relative">
            <Link to={"/orders"}>My Orders</Link>
            <div className="absolute  bg-red-600 px-[8px] py-[0.5px] rounded-full top-0 right-0 text-[9px] text-white">
              0
            </div>
          </li>
          <li className="py-[4px] text-blue-400 hover:text-slate-500 font-medium">
            <Link to={"/logout"}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Head = () => {
  const [profile, setProfile] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [icon, seticon] = useState("Menu");
  const [navbar, setNavbar] = useState(true);
  const NavbarHandler = () => {
    setNavbar((prevstate) => !navbar);
    if (navbar) {
      seticon("close");
    } else seticon("menu");
    // seticon((prevstate) => !"Home" || "close");
  };

  const showProfile = () => {
    setProfile((prevstate) => !profile);
  };

  const { cartItems } = useContext(CartContext);

  return (
    <div className="flex sticky z-10 shadow-xl justify-between items-center px-5 py-[11px] sm:py-4 lg:py-3 w-full bg-white">
      <div className="flex justify-between w-full md:w-4/6 items-center ">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <div className="flex items-center px-3 w-8/12 sm:w-4/6 lg:w-6/6 m-auto">
          <input
            type="text"
            name=""
            id=""
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="w-full border-2 border-blue-400 rounded-lg px-5 py-[4px] outline-none text-sm"
            placeholder="Enter to search ..."
          />
          <button type="submit">
            <span className="material-symbols-outlined font-medium text-2xl cursor-pointer">
              search
            </span>
          </button>
        </div>
      </div>
      <div
        className={`${
          !navbar ? "grid" : "hidden"
        } lg:flex  sm:bg-slate-200 absolute justify-between items-center lg:w-4/6 lg:h-0 right-0 left-0 w-[50vw] pt-10 pb-10 place-items-center h-[100vh] bg-slate-200 top-[60px] lg:relative lg:top-0 lg:pt-0 lg:pb-0  lg:justify-end transition-all delay-100"`}
      >
        <nav className="lg:flex justify-between lg:w-5/6 sm:w-full w-full px-4 tracking-wide ">
          <ul className="text-blue-400 lg:flex block sm:grid gap-10  lg:gap-0 justify-between w-full">
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink to={"/shop"}>HOME</NavLink>
            </li>
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink to={"/shop/product"}>PRODUCTS</NavLink>
            </li>
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink to={"/help "}>SUPPORT</NavLink>
            </li>
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink to={"/about-us"}>ABOUT</NavLink>
            </li>
          </ul>
        </nav>
        <div className="lg:flex lg:justify-evenly lg:gap-0 grid gap-5 grid-flow-col justify-between lg:w-3/12 md:w-2/6 sm:w-3/6 lg:flex-none md:flex-1 relative">
          <div className="">
            <span
              className="material-symbols-outlined font-regular text-2xl cursor-pointer bg-blue-400 rounded-full px-[6px] py-[2px]"
              onClick={showProfile}
            >
              person
            </span>
            {profile ? <Modal /> : ""}
          </div>
          <Link to={"/shop/cart"}>
            <div className="relative">
              <span className="material-symbols-outlined font-regular text-2xl cursor-pointer rounded-full bg-blue-400 px-[6px] py-[2px] ">
                shopping_cart
              </span>
              <p className="absolute bg-red-600 px-[6px] py-[2px] rounded-full top-0 right-0 text-xs text-white">
                {cartItems.length}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <button onClick={NavbarHandler} className="lg:hidden">
        <span className="material-symbols-outlined text-blue-400 text-3xl">
          {icon}
        </span>
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <Ctawrapper className="bg-Shop">
        <CTAtextcomponent
          headline="STOP. SHOP. REPEAT."
          tagword=" Enjoy the comfort of clicking away your needs."
          title="START BUYING"
        />
      </Ctawrapper>
    </div>
  );
};

export default Header;
