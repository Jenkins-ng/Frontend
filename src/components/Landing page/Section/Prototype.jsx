import React from "react";
import Text from "./Text";

const Prototype = (props) => {
  const classes = `block overflow-hidden justify-between items-center m-auto w-4/5 h-[350px] md:h-[420px] shadow-lg object-cover mb-5 bg-slate-100 rounded-lg hover:scale-110 hover:transition-all hover:delay-75 hover:duration-75 + ${props.className}`;
  return (
    <div className={classes}>
      <div className=" w-full h-1/2 sm:h-2/3 overflow-hidden object-cover">
        <img src={props.src} alt="" className="object-cover" />
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
