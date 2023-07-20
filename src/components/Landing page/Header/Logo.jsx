import React from "react";
import CompanyLogo from "../../../assets/images/company-logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img
        src={CompanyLogo}
        alt=""
        aria-label="Logo"
        className="sm:w-[80px] w-[70px] md:w-[100px]"
      />
      <p className="text-sm font-bold text-blue-400">.NG</p>
    </div>
  );
};

export default Logo;
