import React from "react";
import { Link } from "react-router-dom";

const Emailverifybutton = (props) => {
  return (
    <div className="flex gap-10 items-center ">
      <a
        href=""
        className="px-8 py-2 text-sm bg-blue-950 text-slate-100 rounded-lg"
      >
        {props.title}
      </a>
      <Link to="/signin" className="text-sm text-blue-800 font-bold">
        Back to login
      </Link>
    </div>
  );
};

export default Emailverifybutton;
