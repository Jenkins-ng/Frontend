import React, { useEffect, useState } from "react";
import Catergories from "../Home/Section/Catergories";
// import Products from "../Data/Products";
import { apiPrivate as api } from "../../../utils/api";
import Product from "./Product";
import { Spinner } from "flowbite-react";

const AllProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get("/products");
        const result = await response.data.data;
        setProduct(result);
        console.log(result);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetch();
  }, []);

  return (
    <main className="relative top-[68px] overflow-scroll h-[calc(100% - 68px)] Hide">
      <h1 className="m-10 md:mx-20 md:text-2xl text-3xl text-slate-500 font-bold">
        SHOP BY CATEGORY
      </h1>
      <div>
        <Catergories />
      </div>
      <div className="flex flex-wrap  w-[90%] m-auto mb-10">
        {!product ? (
          product.map((product) => <Product data={product} key={product.id} />)
        ) : (
          <div className="text-center my-10 m-auto">
            <Spinner size="xl" />
          </div>
        )}
      </div>
    </main>
  );
};

export default AllProducts;
