import React from "react";
import farmkart from "../../../assets/images/Ticket section/partners/farmkart.png";
import natours from "../../../assets/images/Ticket section/partners/logo-green.png";
import airbnb from "../../../assets/images/Ticket section/partners/airbnb.png";
import dangote from "../../../assets/images/Ticket section/partners/dangote.png";
import buildlab from "../../../assets/images/Ticket section/partners/buildlab.png";
import farmcrowdy from "../../../assets/images/Ticket section/partners/farmcrowdy.png";
import ibm from "../../../assets/images/Ticket section/partners/logo-ibm.png";

const Partners = () => {
  return (
    <div className="text-center mt-10 mb-10">
      <h2 className="text-3xl font-bold tracking-wider mb-8 text-slate-500">
        OUR PARTNERS
      </h2>
      <div className="text-center grid place-content-center place-items-center grid-cols-4 md:grid-cols-7">
        <img src={farmkart} alt="" className="w-1/2" />
        <img src={natours} alt="" className="w-1/2" />
        <img src={airbnb} alt="" className="w-1/2" />
        <img src={dangote} alt="" className="w-1/2" />
        <img src={buildlab} alt="" className="w-1/2" />
        <img src={ibm} alt="" className="w-1/2" />
        <img src={farmcrowdy} alt="" className="w-1/2" />
      </div>
    </div>
  );
};

export default Partners;
