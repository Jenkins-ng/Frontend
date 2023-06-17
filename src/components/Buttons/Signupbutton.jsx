import React from "react";

const Signupbutton = (props) => {
  const classes = `text-xs text-center px-9 py-2 mt-6 bg-blue-950 rounded-md text-slate-300  + ${props.className}`;
  return (
    <div>
      <a href="" className={classes}>
        {props.title}
      </a>
    </div>
  );
};

export default Signupbutton;
