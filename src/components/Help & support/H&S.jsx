import React from "react";
import SectionThree from "../Landing page/SectionThree/SectionThree";
import Head from "../Landing page/Header/Head";
import Foot from "../Landing page/Footer/foot";

const HelpSupport = () => {
  return (
    <>
      <Head />
      <div className="absolute top-[100px] left-0 w-full">
        <div className="text-slate-400 text-xl text-center">
          <h1 className="font-bold text-2xl">
            ARE YOU HAVING ANY ISSUES OR COMPLIANT?
          </h1>
          <p>Reach out to our team of dignified customer support.</p>
        </div>
        <SectionThree />
        <Foot />
      </div>
    </>
  );
};

export default HelpSupport;
