import React from "react";
import { Link } from "react-router-dom";
const Loginbutton = (props) => {
  const classes = ` px-8 py-2 text-slate-200 font-bold text-center rounded-lg mt-6 text-sm sm:text-base  + ${props.className}`;
  return (
    <div>
      <Link to={props.to}>
        <button type="submit" className={classes}>
          {props.title}
        </button>
      </Link>
    </div>
  );
};

export default Loginbutton;
