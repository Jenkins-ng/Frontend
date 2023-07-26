import React from "react";
import { NavLink } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const FootLinks = () => {
  return (
    <div className="lg:flex md:grid md:grid-cols-3 md:w-full md:mt-10 block gap-3 justify-between w-1/2 my-5 text-sm md:m-auto">
      <div className="mb-4  md:mb-0">
        <p className="text-slate-500 font-bold mb-2 text-sm sm:text-lg md:text-xl">
          QUICK LINKS
        </p>
        <ul className="flex flex-col gap-[3px] whitespace-nowrap text-sm sm:text-lg md:text-base">
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/shop">HOME</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/shop/product">PRODUCTS</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/about-us">ABOUT</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/help">SUPPORT</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/shop/cart">CART</NavLink>
          </li>
        </ul>
      </div>
      <div className="mb-4 md:mb-0">
        <p className="text-slate-500 font-bold mb-2 text-sm sm:text-lg md:text-xl">
          SUPPORT
        </p>
        <ul className="flex flex-col gap-[3px] whitespace-nowrap text-sm sm:text-lg md:text-base">
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="">PRIVACY POLICY</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="">TERM OF USE</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="">FAQ</NavLink>
          </li>
        </ul>
      </div>
      <div className="mb-4 md:mb-0">
        <p className="text-slate-500 font-bold mb-2 text-sm sm:text-lg md:text-xl">
          CONTACT US
        </p>
        <ul className="flex flex-col gap-[3px] whitespace-nowrap text-sm sm:text-lg md:text-base">
          <li className="text-blue-400   whitespace-normal">
            Plot 11C, Circular Road, <br /> Presidential Estate, GRA Phase II,{" "}
            <br />
            Port Harcourt, Rivers State, NG.
          </li>
          <li className="text-blue-400  ">contact@jenkins.ng</li>
          <li className="text-blue-400   block">
            <p>+234-803-210-7071</p>
            <p>+234-816-905-2811</p>
            <p>+234-813-934-9390</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FootLinks;
