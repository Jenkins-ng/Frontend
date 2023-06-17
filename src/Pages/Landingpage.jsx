import React from "react";
import Ctatext from "../components/Landing page/CTA/Ctatext";
import Section from "../components/Landing page/Section/Section";
import Foot from "../components/Landing page/Footer/foot";
import SectionTwo from "../components/Landing page/SectionTwo/SectionTwo";
import Action from "../components/Landing page/Action/Action";
import SectionThree from "../components/Landing page/SectionThree/SectionThree";

const Landingpage = () => {
  return (
    <div className="m-0 p-0">
      <Ctatext />
      <Section />
      <SectionTwo />
      <Action />
      <SectionThree />
      <Foot />
    </div>
  );
};

export default Landingpage;
