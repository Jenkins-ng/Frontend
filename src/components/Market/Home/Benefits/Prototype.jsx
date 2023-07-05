import React from "react";

const Prototype = ({ image, title, text }) => {
  return (
    <div className="flex flex-col items-center m-4 ">
      <span className="material-symbols-outlined text-4xl">{image}</span>
      <p className="text-blue-400 font-[500]">{title}</p>
      <p className="text-sm text-slate-400">{text}</p>
    </div>
  );
};

export default Prototype;
