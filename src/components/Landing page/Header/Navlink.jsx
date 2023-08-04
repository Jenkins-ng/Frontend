import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = (props) => {
  const classes = `text-sm text-blue-400 px-5 py-[4px] w-[max-content] rounded-2xl hover:text-white hover:bg-blue-400 block  + ${props.className}`;
  return (
    <li className="list-none">
      <NavLink to={props.to} className={classes} >
        {props.label}
      </NavLink>
    </li>
  );
};

export default Navlink;
