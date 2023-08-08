import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import Product from "./Product";
import notifyError from "../../../utils/notifyError";
// import ProductData from "../Data/Products";
import { apiPrivate as api } from "../../../utils/api";
import { NavLink } from "react-router-dom";

const TopProducts = () => {
  const [Data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get("/products");
        const result = await response.data.data;
        setData(result);
        console.log(result);
      } catch (error) {
        console.log(error);
        if (error.message === "Network Error") {
          notifyError(error.message);
          setIsError(true);
        }
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
      {Data ? (
        <div className="my-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-between">
          {Data.map((data) => (
            <Product data={data} key={data.id} />
          ))}
        </div>
      ) : !isError ? (
        <div className="text-center my-10 m-auto">
          <Spinner size="xl" />
        </div>
      ) : (
        <p className="text-center font-bold my-10 text-slate-500 uppercase">
          Network Error. Make sure you are connected to the internet.
        </p>
      )}
    </div>
  );
};

export default TopProducts;
