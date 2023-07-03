import React from "react";
import Category from "./Category";
import Data from "../../Data/Categoriesdata";

const Catergories = () => {
  //   console.log(Data);
  return (
    <div className="">
      <h1>Top Categories</h1>
      <div className="flex flex-wrap justify-between">
        {Data.map((items) => (
          <Category items={items} key={items.id} />
        ))}
      </div>
    </div>
  );
};

export default Catergories;
