import React from "react";
import Catergories from "../Home/Section/Catergories";
import Products from "../Data/Products";
import Product from "./Product";

const AllProducts = () => {
  return (
    <main className="">
      <h1 className="m-10 md:mx-20 md:text-2xl text-3xl text-slate-500 font-bold">
        SHOP BY CATEGORY
      </h1>
      <div>
        <Catergories />
      </div>
      <div className="flex flex-wrap  w-[90%] m-auto mb-10">
        {Products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </main>
  );
};

export default AllProducts;
