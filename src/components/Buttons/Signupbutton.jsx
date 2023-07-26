import React, { Children } from "react";

import { Link } from "react-router-dom";

const Signupbutton = (props) => {
  const classes = `text-xs sm:text-base text-center px-9 py-2 mt-6 bg-blue-950 rounded-md text-slate-300  + ${props.className}`;
  return (
    <div className="w-auto">
      <button className={classes}>{props.children}</button>
    </div>
  );
};

export default Signupbutton;
