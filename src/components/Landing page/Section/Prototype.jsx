import React from "react";
import Text from "./Text";

const Prototype = (props) => {
  const classes = `block sm:flex overflow-hidden justify-between items-center content-center m-auto w-4/5 sm:w-[90%] h-[350px] sm:h-[220px] shadow-lg object-cover mb-5 bg-slate-100 rounded-lg hover:scale-110 hover:transition-all hover:delay-75 hover:duration-75 + ${props.className}`;
  return (
    <div className={classes}>
      <div className=" w-full h-1/2 sm:h-max overflow-hidden  object-cover">
        <img src={props.src} alt="" className="object-cover block w-full" />
      </div>
      <Text
        Id={props.Id}
        heading={props.heading}
        text={props.text}
        break={props.break}
        to={props.to}
      />
    </div>
  );
};

export default Prototype;
