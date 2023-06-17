import React from "react";
import Loginbutton from "../../Buttons/Loginbutton";
import Inputfield from "../../signup/Inputfield";

const Keepup = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-500">
        KEEP UP WITH TRENDING EVENTS
      </h2>
      <div className=" w-4/6 rounded-xl mb-14 mt-8 bg-slate-200 m-auto p-8 shadow-xl">
        <h3 className="text-lg md:text-2xl font-bold  text-blue-500">
          Subscribe to our newsletter to keep up with the latest and exciting
          events and conferences.
        </h3>
        <Inputfield placeholder="Jenkins@gmail.com" />
        <Loginbutton title="SUBSCRIBE" className="m-5 bg-blue-400" />
      </div>
    </div>
  );
};

export default Keepup;
