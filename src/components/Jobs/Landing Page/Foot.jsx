import React from "react";
import { NavLink } from "react-router-dom";
import Socials from "../../Landing page/Footer/Socials";
import Footbg from "../../Landing page/Footer/Footbg";
import Logo from "../../Landing page/Header/Logo";

export const Footlink = () => {
  return (
    <div className="lg:flex md:grid md:grid-cols-3 md:w-full md:mt-10 block gap-3 justify-between w-1/2 my-5 text-sm md:m-auto">
      <div className="mb-4  md:mb-0">
        <p className="text-slate-500 font-bold mb-2 text-sm sm:text-lg md:text-xl">
          QUICK LINKS
        </p>
        <ul className="flex flex-col gap-[3px] whitespace-nowrap text-sm sm:text-lg md:text-base">
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/job">HOME</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/jobs">JOBS</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/about-us">ABOUT</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/help">SUPPORT</NavLink>
          </li>
          {/* <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/shop/cart">CART</NavLink>
          </li> */}
        </ul>
      </div>
      <div className="mb-4 md:mb-0">
        <p className="text-slate-500 font-bold mb-2 text-sm sm:text-lg md:text-xl">
          SUPPORT
        </p>
        <ul className="flex flex-col gap-[3px] whitespace-nowrap text-sm sm:text-lg md:text-base">
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/privacy-policy">PRIVACY POLICY</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="">TERM OF USE</NavLink>
          </li>
          <li className="text-blue-400  hover:text-gray-500">
            <NavLink to="/faq">FAQ</NavLink>
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

const Foot = () => {
  return (
    <Footbg>
      <div className="lg:flex block justify-between items-start content-center">
        <Logo />
        <Footlink className="grid justify-between grid-cols-2 lg:grid lg:grid-cols-3 " />
        <div className="md:flex block justify-between">
          <div className="md:flex  h-8">
            <input
              type="email"
              placeholder="Jenkins@info.com"
              className="px-[10px] py-[3px] rounded-lg text-sm outline-none"
            />
            <button className="px-[20px]  py-[3px] bg-blue-400 text-white rounded-md font-bold text-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-center mt-10">
        <div className="mb-4 md:mb-0 text-sm">
          <p>&copy; JENKINS DEVELOPMENT AND SUBSTANTIAL SERVICES LIMITED.</p>
          <p>ALL RIGHTS RESERVED.</p>
        </div>
        <Socials />
      </div>
    </Footbg>
  );
};

export default Foot;
