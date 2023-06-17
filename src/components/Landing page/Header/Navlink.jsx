import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = (props) => {
  const classes = `text-sm text-blue-400 px-5 py-[4px] my-[5px] w-[max-content] whitespace-nowrap rounded-2xl hover:text-white hover:bg-blue-400 block  + ${props.className}`;
  return (
    <li className="list-none">
      <NavLink to={props.to} className={classes} activeClassName="bg-blue-400">
        {props.label}
      </NavLink>
    </li>
  );
};

export default Navlink;
