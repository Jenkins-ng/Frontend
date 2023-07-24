import React from "react";
import Prototype from "../SectionTwo/Prototype";

const SectionTwo = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-blue-400 text-3xl tracking-wider mt-14">
        WHY CHOOSE US?
      </h2>
      <p className="text-center font-semibold text-blue-400 mb-8 mt-4 text-xl sm:tracking-wider">
        Trusted By Many With Over 500+ Traffic Request per Day.
      </p>
      <div className="block mt-8 md:flex md:justify-between md:text-center py-10 md:w-[95%] md:m-auto">
        <Prototype name="assured_workload" title="Secure Payment System." />
        <Prototype name="local_shipping" title="Endless Shopping." />
        <Prototype name="speed" title="Fast and swift response" />
        <Prototype name="all_inclusive" title="Unending learning" />
        <Prototype name="verified_user" title="Trustable network" />
      </div>
    </div>
  );
};

export default SectionTwo;
