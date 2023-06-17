import React from "react";
import Loginbutton from "../../Buttons/Loginbutton";

const Action = () => {
  return (
    <div className="md:w-3/6 w-[90%] rounded-xl mb-14 mt-8 bg-slate-200 m-auto p-8 text-center shadow-xl">
      <h3 className="text-2xl font-bold text-center text-blue-500">
        Onboard With Over 500+ Plus Users Today.
      </h3>
      <Loginbutton title="Get Started" className="bg-blue-400" />
    </div>
  );
};

export default Action;
