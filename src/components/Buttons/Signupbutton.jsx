import React, { Children } from "react";

import { Link } from "react-router-dom";

const Signupbutton = (props) => {
  const classes = `text-xs sm:text-base text-center px-9 py-2 mt-6 rounded-md text-slate-100  + ${props.className}`;
  return (
    <div className="w-auto">
      <button className={classes} type="submit">
        {props.children}
      </button>
    </div>
  );
};

export default Signupbutton;
