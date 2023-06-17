import React from "react";

const Inputfield = (props) => {
  return (
    <div className="grid mb-6 w-full">
      <label className="mb-2 text-sm ">{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        className="px-4 py-2 rounded-bl bg-slate-100 rounded-md focus:border-solid focus:border-blue-900 outline-none"
      />
    </div>
  );
};

export default Inputfield;
