import React from "react";
import SectionThree from "../Landing page/SectionThree/SectionThree";
import Head from "../Landing page/Header/Head";
import Foot from "../Landing page/Footer/foot";
import ScrollToTop from "../eventhive/ScrollToTop";

const HelpSupport = () => {
  return (
    <main>
      <ScrollToTop />
      <Head />
      <div className="absolute top-[100px] left-0 w-full">
        <div className="text-slate-400 text-xl text-center top-[100px]">
          <h1 className="font-bold text-xl mx-5 sm:mx-0 sm:text-2xl">
            ARE YOU HAVING ANY ISSUES OR COMPLIANT?
          </h1>
          <p>Reach out to our team of dignified customer support.</p>
        </div>
        <SectionThree />
        <Foot />
      </div>
    </main>
  );
};

export default HelpSupport;
