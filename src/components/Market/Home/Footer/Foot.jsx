import React from "react";
import Socials from "../../../Landing page/Footer/Socials";
import Footbg from "../../../Landing page/Footer/Footbg";
import FootLinks from "./FootLinks";
import Logo from "../../../Landing page/Header/Logo";

const Foot = () => {
  return (
    <Footbg>
      <div className="lg:flex block justify-between items-start content-center">
        <Logo />
        <FootLinks className="grid justify-between grid-cols-2 lg:grid lg:grid-cols-3 " />
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
