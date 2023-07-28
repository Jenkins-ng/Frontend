import React from "react";
import { Link } from "react-router-dom";

const Emailverifybutton = (props) => {
  return (
    <div className="flex gap-10 items-center justify-between whitespace-nowrap">
      <button
        type="submit"
        onClick={props.onclick}
        className="px-8 py-2 text-md bg-blue-400 text-slate-500 font-bold rounded-lg"
      >
        {props.title}
      </button>
      <Link to="/signin" className="text-base text-slate-500 font-bold">
        BACK TO LOGIN
      </Link>
    </div>
  );
};

export default Emailverifybutton;
