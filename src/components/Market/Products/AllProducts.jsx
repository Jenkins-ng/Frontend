import React from "react";
import Catergories from "../Home/Section/Catergories";
import Products from "../Data/Products";
import Product from "./Product";

const AllProducts = () => {
  return (
    <main>
      <h1>Shop By Category</h1>
      <div>
        <Catergories />
      </div>
      <div className="flex flex-wrap">
        {Products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </main>
  );
};

export default AllProducts;
