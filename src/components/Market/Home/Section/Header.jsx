import React, { useState } from "react";
import Logo from "../../../Landing page/Header/Logo";
import { Link, NavLink } from "react-router-dom";
import CTAtextcomponent from "../../../Landing page/CTA/CTAtextcomponent";
import Ctawrapper from "../../../Landing page/CTA/Ctawrapper";
// import { useStateValue } from "../../Store/StateProvider";

export const Modal = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute bg-slate-100 p-5 text-sm whitespace-nowrap rounded-lg">
        <ul>
          <li className="py-[4px] text-blue-400 hover:text-slate-500 font-medium">
            <Link to={"/profile"}>Manage Account</Link>
          </li>
          <li className="py-[4px] text-blue-400 hover:text-slate-500 font-medium">
            <Link to={"/orders"}>My Orders</Link>
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
  // const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="flex fixed z-10 shadow-xl justify-between items-center px-5 py-[4px] w-full bg-white">
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
        {/* <div className="grid">
          <span>Hello Guest</span>
        </div> */}
        <nav className="md:flex justify-between w-4/6 px-4 hidden ">
          <ul className="text-blue-400 flex justify-between w-full">
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink>HOME</NavLink>
            </li>
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink>PRODUCTS</NavLink>
            </li>
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink>SUPPORT</NavLink>
            </li>
            <li className="text-blue-400 font-bold hover:text-gray-500">
              <NavLink>ABOUT</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex justify-evenly w-2/6 flex-1 relative">
          <div className="">
            <span
              className="material-symbols-outlined font-extrabold text-3xl cursor-pointer"
              onClick={showProfile}
            >
              person
            </span>
            {profile ? <Modal /> : ""}
          </div>
          <Link to={"/shop/cart"}>
            <span className="material-symbols-outlined font-extrabold text-3xl cursor-pointer">
              shopping_cart
            </span>
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
        <Head />
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
