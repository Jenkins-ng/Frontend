import React from "react";
import Ctatext from "../components/Landing page/CTA/Ctatext";
import Section from "../components/Landing page/Section/Section";
import Foot from "../components/Landing page/Footer/foot";
import SectionTwo from "../components/Landing page/SectionTwo/SectionTwo";
import Action from "../components/Landing page/Action/Action";
import SectionThree from "../components/Landing page/SectionThree/SectionThree";
import Reviews from "../components/Landing page/Reviews/Reviews";
import About from "../components/About us/About us";

const Landingpage = () => {
  return (
    <div className="m-0 p-0">
      <Ctatext />
      <About />
      <Section />
      <SectionTwo />
      <Action />
      <SectionThree />
      <Reviews />
    </div>
  );
};

export default Landingpage;
