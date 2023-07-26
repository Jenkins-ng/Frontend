import React from "react";
import { Link } from "react-router-dom";

const Text = (props) => {
  return (
    <div className="text-left w-full px-6 py-2 mt-2 items-center flex flex-col h-1/2">
      <h3 className="mb- text-base text-blue-400 font-bold">{props.Id}</h3>
      <p className="text-md text-blue-400 line-clamp-3">{props.heading}</p>
      <p className="text-md text-blue-400">{props.break}</p>
      <button className="text-base bg-blue-400 text-white px-6 py-[4px] mt-3 rounded-2xl ">
        <Link to={props.to}>{props.text}</Link>
      </button>
    </div>
  );
};

export default Text;
