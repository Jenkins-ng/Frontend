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

  const showProfile = () => {
    setProfile((prevstate) => !profile);
  };

  const { cartItems } = useContext(CartContext);

  return (
    <div className="flex sticky z-10 shadow-xl justify-between items-center px-5 py-[4px] w-full bg-white">
      <div className="flex justify-between w-full md:w-4/6">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <div className="flex items-center px-3 w-5/6">
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
      <div className="flex justify-between items-center w-3/6">
        <nav className="md:flex justify-between w-4/6 px-4 hidden tracking-wide">
          <ul className="text-blue-400 flex justify-between w-full">
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink to={"/shop"}>HOME</NavLink>
            </li>
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink to={"/shop/product"}>PRODUCTS</NavLink>
            </li>
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink to={""}>SUPPORT</NavLink>
            </li>
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink>ABOUT</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex justify-evenly w-2/6 flex-1 relative">
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
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <Ctawrapper className="bg-Shop">
        {/* <Head /> */}
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
