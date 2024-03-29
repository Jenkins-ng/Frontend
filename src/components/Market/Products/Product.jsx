import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "../Home/Components/Star";

const ImageUrl = "https://api.jenkins.ng/storage/";
const Product = ({ data }) => {
  console.log(data.image);
  return (
    <Link to={`/shop/product/${data.slug}`}>
      <div className="shadow-xl bg-slate-100 rounded-lg mx-3 my-2 relative w-aut overflow-hidden text-sm hover:cursor-pointer sm:h-[350px] h-[400px]">
        <img
          src={ImageUrl + data.image}
          alt=""
          className="sm:h-3/5 h-4/6 w-full"
        />

        <div className="p-2 grid grid-flow-row justify-between place-content-between">
          <div className="pb-2">
            <p className="font-[500] text-slate-600 text-[16px]">
              {data.title}
            </p>
            <p className="text-slate-400 text-[14px] line-clamp-3">
              {data.description}
            </p>
          </div>
          <div className="">
            <p className="text-sm font-[500] text-slate-600">
              <strong># {data.price}</strong>
            </p>
            <div className="flex gap-2 font-bold">
              Rating:
              <StarRating rate={5} />
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          <button
            type="submit"
            className="bg-blue-400  text-white hover:bg-slate-400 hover:text-slate-100 px-6 py-[3px] rounded-xl text-sm"
          >
            Add to cart{" "}
          </button>
        </div> */}
      </div>
    </Link>
  );
};

export default Product;
