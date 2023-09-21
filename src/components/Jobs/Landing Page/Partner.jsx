import React from "react";
import brands from "../../../utils/brands";

const Partner = () => {
  return (
    <div className="mb-10">
      <h1 className="uppercase text-slate-400 mt-10 font-bold sm:text-xl tracking-wider">
        companies we help grow
      </h1>
      <div className="grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
        {brands.map((brand, i) => (
          <img
            src={brand}
            alt="company-image"
            className=" block w-auto h-auto m-auto"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Partner;
