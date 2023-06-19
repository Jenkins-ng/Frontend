import React from "react";
import { Link } from "react-router-dom";

const Signupbutton = (props) => {
  const classes = `text-xs text-center px-9 py-2 mt-6 bg-blue-950 rounded-md text-slate-300  + ${props.className}`;
  return (
    <div>
      <Link to={props.to} className={classes}>
        {props.title}
      </Link>
    </div>
  );
};

export default Signupbutton;
