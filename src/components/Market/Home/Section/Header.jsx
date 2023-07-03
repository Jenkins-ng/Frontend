import React from "react";
import Logo from "../../../Landing page/Header/Logo";
import { NavLink } from "react-router-dom";
// import { useStateValue } from "../../Store/StateProvider";

const Header = () => {
  // const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="flex fixed z-10 shadow-xl justify-between items-center px-5 py-[4px] w-full bg-white">
      <div className="flex justify-between w-4/6">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <div className="flex items-center px-3 w-5/6">
          <input
            type="text"
            name=""
            id=""
            className="w-full border-2 border-blue-400 rounded-lg px-5 py-[4px] outline-none text-sm"
            placeholder="Enter to search ..."
          />
          <button type="submit">
            <span className="material-symbols-outlined font-medium text-2xl">
              search
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center w-2/6">
        {/* <div className="grid">
          <span>Hello Guest</span>
        </div> */}
        <nav className="flex justify-between w-5/6 px-4">
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
        <div className="flex">
          <span className="material-symbols-outlined font-extrabold text-3xl">
            shopping_cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
