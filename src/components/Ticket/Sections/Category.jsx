import React from "react";

const Category = (props) => {
  const classes = `w-1/2 rounded-full + ${props.className}`;
  return (
    <div className="grid place-items-center my-10 mt-0">
      <img src={props.image} alt="" className={classes} />
      <p className="font-bold text-slate-500">{props.text}</p>
    </div>
  );
};

export default Category;
