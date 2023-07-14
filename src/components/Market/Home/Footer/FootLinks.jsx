import React from "react";
import { NavLink } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const FootLinks = () => {
  return (
    <div className="md:flex block gap-3 justify-between w-1/2 my-5 text-sm md:m-auto">
      <div>
        <p className="text-slate-500 font-bold text-xl">QUICK LINKS</p>
        <ul className="">
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="">HOME</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="">PRODUCTS</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="">ABOUT</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="">SUPPORT</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="">CART</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-slate-500 font-bold text-xl">SUPPORT</p>
        <ul className="">
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
      <div>
        <p className="text-slate-500 font-bold text-xl">CONTACT US</p>
        <ul className="">
          <li className="text-blue-400   whitespace-normal">
            Plot 11C, Circular Road, <br /> Presidential Estate, GRA Phase II,
            <br /> Port Harcourt, Rivers State, NG.
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
