import React from "react";
import Signupbutton from "../../Buttons/Signupbutton";

const CTAtextcomponent = (props) => {
  const classes = `mb-6 text-blue-400 + ${props.className}`;
  return (
    <div>
      <div className="absolute w-4/5 h-1/2 items-center content-center grid  pl-20 translate-y-2/4">
        <div className={classes}>
          <h1 className="md:text-6xl text-4xl font-bold tracking-widest">
            {props.headline}
          </h1>
          <p className="my-2 text-xl">{props.tagword}</p>
        </div>

        <Signupbutton
          title={props.title}
          className="hover:bg-blue-400 hover:text-slate-800 text-lg rounded-2xl mt-10 font-bold"
        />
      </div>
    </div>
  );
};

export default CTAtextcomponent;
