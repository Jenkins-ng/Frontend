import React from "react";
import Prototype from "../SectionTwo/Prototype";

const SectionTwo = () => {
  return (
    <div className="w-[90%] m-auto">
      <h2 className="text-center font-bold text-slate-500 text-xl sm:text-2xl md:text-3xl mt-14">
        WHY CHOOSE US?
      </h2>
      <p className="text-center font-semibold text-blue-400 mb-8 mt-4 text-xl sm:tracking-wider">
        Trusted By Many With Over 500+ Traffic Request per Day.
      </p>
      <div className="grid mt-8 gap-3 grid-cols-2 md:grid sm:grid-cols-3 lg:grid-cols-6 md:justify-between md:text-center py-10 md:w-[95%] md:m-auto">
        <Prototype name="assured_workload" title="Secure Payment System." />
        <Prototype name="local_shipping" title="Endless Shopping." />
        <Prototype name="speed" title="Fast and swift response" />
        <Prototype name="all_inclusive" title="Unending learning" />
        <Prototype name="verified_user" title="Trustable network" />
        <Prototype name="Support_agent" title="24/7 Support" />
      </div>
    </div>
  );
  o;
};

export default SectionTwo;
