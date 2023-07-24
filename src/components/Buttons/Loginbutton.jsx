import React from "react";
import { Link } from "react-router-dom";
const Loginbutton = (props) => {
  const classes = ` px-8 py-2 text-slate-200 font-bold text-center rounded-lg mt-6 text-md  + ${props.className}`;
  return (
    <div>
      <button href="" type="submit" className={classes}>
        <Link to={props.to}>{props.title}</Link>
      </button>
    </div>
  );
};

export default Loginbutton;
