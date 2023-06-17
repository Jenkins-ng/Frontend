import React from "react";
import Text from "./Text";

const Prototype = (props) => {
  const classes = `block justify-between items-center m-auto w-4/5 md:h-[250px] h-[max-content] shadow-xl mb-5 bg-slate-100 rounded-lg overflow-hidden sm:flex sm:h-[250px] + ${props.className}`;
  return (
    <div className={classes}>
      <div className="sm:w-2/4 w-full">
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
