import React from "react";
import { Link } from "react-router-dom";

const Text = (props) => {
  return (
    <div className="text-left w-full px-6 py-2 mt-2 sm:mt-0 sm:py-0 sm:px-6 items-center content-center flex flex-col h-1/2 sm:h-fit">
      <h3 className="text-base text-blue-400 mb-1 sm:mb-2 font-bold">
        {props.Id}
      </h3>
      <p className="text-md text-blue-400 text-sm sm:text-base">
        {props.heading}
      </p>
      <p className="text-md text-blue-400 text-sm sm:text-base">
        {props.break}
      </p>
      <div className="sm:text-right">
        <button className="text-base bg-blue-400 text-white px-6 py-[4px] mt-3 rounded-2xl">
          <Link to={props.to}>{props.text}</Link>
        </button>
      </div>
    </div>
  );
};

export default Text;
