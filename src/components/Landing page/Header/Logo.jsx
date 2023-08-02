import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../../../assets/images/company-logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img
        src={CompanyLogo}
        alt=""
        aria-label="Logo"
        className="sm:w-[80px] w-[80px] md:w-[100px] lg:w-[120px]"
      />
      <p className="text-sm font-bold text-blue-400">.NG</p>
    </div>
  );
};

export default Logo;
