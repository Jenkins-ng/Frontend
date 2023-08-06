import React from "react";

const Prototype = (props) => {
  return (
    <div className="items-center flex flex-col content-center gap-1 my-3">
      <span className="material-symbols-outlined text-blue-400 font-bold text-5xl">
        {props.name}
      </span>
      <p className="text-slate-500 text-base sm:text-lg font-semibold text-center">
        {props.title}
      </p>
    </div>
  );
};

export default Prototype;
