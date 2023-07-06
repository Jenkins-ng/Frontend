import React from "react";

const Category = ({ items }) => {
  return (
    <div className="w-32 mx-3 relative overflow-hidden object-cover hover:scale-110 hover:delay-100  bg-slate200 rounded-xl">
      <img src={items.image} alt="" className="object-cover overflow-hidden" />
      <h1 className="text-sm absolute bottom-1 bg-slate-400 text-white font-bold px-2 rounded-xl hover:text-white hover:bg-blue-400">
        {items.title}
      </h1>
    </div>
  );
};

export default Category;
