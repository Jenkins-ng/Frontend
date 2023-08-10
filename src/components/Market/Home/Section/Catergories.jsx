import React from "react";
import Category from "./Category";
import Data from "../../Data/Categoriesdata";
import "./Style.css";

const Catergories = () => {
  //   console.log(Data);
  return (
    <div className="w-[87%] sm:w-[90%] m-auto my-10 mb-20">
      <h1 className="text-slate-400 font-bold text-xl ">TOP CATEGORIES</h1>
      <div className="relative">
        <div className="grid my-4 grid-flow-col overflow-auto overflow-y-hidden justify-between  Hide relative">
          {Data.map((items) => (
            <Category items={items} key={items.id} />
          ))}
        </div>
        <span className="material-symbols-outlined absolute text-5xl text-slate-200 rounded-full -right-4 bottom-1/3 bg-slate-400 hidden md:block">
          arrow_right
        </span>
      </div>
    </div>
  );
};

export default Catergories;
