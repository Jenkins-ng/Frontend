import React from "react";

import Mail from "../../../assets/Mail.png";
import Twitter from "../../../assets/twitter.png";
import Linkedin from "../../../assets/linkedin 1.png";
import Facebook from "../../../assets/facebook 1.png";

const Social = () => {
  return (
    <span className="flex gap-[5px] items-center">
      <a href="mailto:jenkins@info.com">
        <img src={Mail} alt="" className="w-[30px]" />
      </a>
      <span>
        <a href="">
          <img src={Twitter} alt="" className="w-[35px]" />
        </a>
      </span>
      <span>
        <a href="">
          <img src={Linkedin} alt="" className="w-[35px]" />
        </a>
      </span>
      <span>
        <a href="">
          <img src={Facebook} alt="" className="w-[35px]" />
        </a>
      </span>
      <span>
        <a href="tel:+2348032107071">
          <span className="material-symbols-outlined">call</span>
        </a>
      </span>
    </span>
  );
};

export default Social;
