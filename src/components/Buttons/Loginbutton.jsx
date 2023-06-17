import React from "react";

const Loginbutton = (props) => {
  const classes = ` px-8 py-2 text-slate-200 font-bold text-center rounded-lg mt-6 text-md  + ${props.className}`;
  return (
    <div>
      <button href="" type="submit" className={classes}>
        {props.title}
      </button>
    </div>
  );
};

export default Loginbutton;
