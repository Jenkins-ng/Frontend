import React, { useState } from "react";

const Inputfield = (props) => {
  // const [input, setInput] = useState("")
  return (
    <div className="grid mb-6 w-full">
      <label className="mb-2 text-sm ">{props.label}</label>
      <input
        type={props.type || "text"}
        value={props.input}
        required
        onChange={(e) => {
          props.setInput(e.target.value);
          console.log(props.input);
        }}
        placeholder={props.placeholder}
        className="px-4 py-2 rounded-bl bg-slate-100 rounded-md focus:border-solid focus:border-blue-900 outline-none"
      />
    </div>
  );
};

export default Inputfield;
