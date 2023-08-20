import React from "react";
import Ctatext from "../components/Landing page/CTA/Ctatext";
import Section from "../components/Landing page/Section/Section";
import Foot from "../components/Landing page/Footer/foot";
import SectionTwo from "../components/Landing page/SectionTwo/SectionTwo";
import Action from "../components/Landing page/Action/Action";
import SectionThree from "../components/Landing page/SectionThree/SectionThree";
import Reviews from "../components/Landing page/Reviews/Reviews";
import About from "../components/About us/About us";
import brands from "../utils/brands";

const Landingpage = () => {
  return (
    <div className="m-0 p-0">
      <Ctatext />
      <About />
      <Section />
      <SectionTwo />
      <Action />
      <div className="md:w-5/6 w-[90%] m-auto my-5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-slate-500 uppercase mb-3">
          Our Partners
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-5 items-center gap-3">
          {brands.map((src, i) => {
            return <img src={src} alt="" key={i} className="w-4/6 m-auto" />;
          })}
        </div>
      </div>
      <SectionThree />
      <Reviews />
    </div>
  );
};

export default Landingpage;
