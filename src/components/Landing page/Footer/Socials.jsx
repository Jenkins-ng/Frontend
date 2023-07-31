import React from "react";

import Mail from "../../../assets/Mail.png";
import Twitter from "../../../assets/twitter.png";
import Linkedin from "../../../assets/linkedin 1.png";
import Facebook from "../../../assets/facebook 1.png";

const Social = () => {
  return (
    <span className="flex gap-[5px] items-center">
      <a href="mailto:jenkins@info.com">
        <img src={Mail} alt="mail-icon" className="w-[30px]" />
      </a>
      <span>
        <a href="https://twitter.com/jenkins_ng">
          <img src={Twitter} alt="twitter-icon" className="w-[35px]" />
        </a>
      </span>
      <span>
        <a href="https://linkedin.com/in/jenkinsng">
          <img src={Linkedin} alt="linkedin-icon" className="w-[35px]" />
        </a>
      </span>
      <span>
        <a href="https://facebook.com/jenkins.ng1">
          <img src={Facebook} alt="facebook-icon" className="w-[35px]" />
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
