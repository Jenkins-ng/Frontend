import React from "react";
import Loginbutton from "../../Buttons/Loginbutton";
import Logo from "../Header/Logo";
import Navlinks from "../Header/Navlinks";
import Social from "./Socials";
import Footbg from "./Footbg";

const Foot = () => {
  return (
    <Footbg>
      <div className="md:flex block justify-between items-start content-center m-auto">
        <Logo />
        <Navlinks className="grid justify-between gap-3 my-5 grid-cols-2 md:grid md:grid-cols-2 md:justify-end lg:grid-cols-3 m-auto sm:gap-5" />
        <div className="xl:flex flex sm:block justify-between">
          <div className="grid gap-1 sm:gap-0 sm:block xl:flex  h-8">
            <input
              type="email"
              placeholder="Jenkins@info.com"
              className="px-[10px] py-[3px] rounded-lg text-sm outline-none"
            />
            <div className="sm:w-full">
              <button className="px-[20px]  py-[3px] bg-blue-400 text-white rounded-md font-bold text-sm sm:text-base sm:w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-center mt-10">
        <div className="mb-4 md:mb-0 text-sm text-slate-500">
          <p>&copy; JENKINS DEVELOPMENT AND SUBSTANTIAL SERVICES LIMITED.</p>
          <p>ALL RIGHTS RESERVED. 2023</p>
        </div>
        <Social />
      </div>
    </Footbg>
  );
};

export default Foot;
