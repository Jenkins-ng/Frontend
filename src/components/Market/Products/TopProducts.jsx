import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import ProductData from "../Data/Products";
import { NavLink } from "react-router-dom";

const url =
  "https://aliexpress-datahub.p.rapidapi.com/item_details?itemId=3256804591426248";
const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6938c6e432mshe3a01b58ac44e0ep113ae2jsn2b887700961a",
    "X-RapidAPI-Host": "aliexpress-datahub.p.rapidapi.com",
  },
};
const TopProducts = () => {
  const [Data, setData] = useState([]);

  //   useEffect(() => {
  // try {
  //   fetch(url, option)
  //     .then((data) => data.text())
  //     .then((response) => {
  //       setData(response);
  //       console.log(response);
  //     });
  // } catch (error) {
  //   console.log(error);
  // }
  //   });

  return (
    <div className="w-[87%] sm:w-[90%] m-auto mb-10">
      <div className="flex justify-between">
        <h1 className="text-slate-400 font-bold text-xl ">TOP PRODUCTS</h1>
        <NavLink
          to=""
          className="text-slate-400 font-bold text-base hover:text-blue-400"
        >
          SEE ALL
        </NavLink>
      </div>
      <div className="my-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-between">
        {ProductData.map((data) => (
          <Product data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
