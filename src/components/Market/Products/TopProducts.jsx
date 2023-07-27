import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
// import ProductData from "../Data/Products";
import { apiPrivate as api } from "../../../utils/api";
import { NavLink } from "react-router-dom";

const TopProducts = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get("/products");
        const result = await response.data.data;
        setData(result);
        console.log(result);
      } catch (error) {
        // console.log(error.response);
      }
    }
    fetch();
  }, []);

  return (
    <div className="w-[87%] sm:w-[90%] m-auto mb-10">
      <div className="flex justify-between">
        <h1 className="text-slate-400 font-bold text-xl ">TOP PRODUCTS</h1>
        <NavLink
          to="/shop/product"
          className="text-slate-400 font-bold text-base hover:text-blue-400"
        >
          SEE ALL
        </NavLink>
      </div>
      <div className="my-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-between">
        {Data.map((data) => (
          <Product data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
