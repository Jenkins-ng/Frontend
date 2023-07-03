import React from "react";

const Category = ({ items }) => {
  return (
    <div className="w-20">
      <div>
        <img src={items.image} alt="" className="w-full block" />
      </div>
      <h1>{items.title}</h1>
    </div>
  );
};

export default Category;
