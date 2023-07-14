import React from "react";
import Text from "./Text";

const Prototype = (props) => {
  const classes = `block overflow-hidden justify-between items-center m-auto w-4/5 py-4 h-[350px] shadow-lg object-cover mb-5 bg-slate-100 rounded-lg hover:scale-110 hover:transition-all hover:delay-75 hover:duration-75 + ${props.className}`;
  return (
    <div className={classes}>
      <div className=" w-full h-1/2 overflow-hidden object-cover">
        <img src={props.src} alt="" />
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
