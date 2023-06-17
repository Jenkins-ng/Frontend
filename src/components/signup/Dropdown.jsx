import React from "react";

const Dropdown = (props) => {
  const options = props.option;
  const classes = `px-3 py-2 border-solid border-2 text-sm border-gray-500 rounded-lg bg-stone-300  focus:border-slate-300 outline-none + ${props.className}`;
  return (
    <div className={classes}>
      <label className="mb-2 text-base text-slate-400 font-bold">
        {props.label}
        <select>
          {options.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
