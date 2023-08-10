import React, { useEffect, useState } from "react";
import Catergories from "../Home/Section/Catergories";
import notifyError from "../../../utils/notifyError";
import { apiPrivate as api } from "../../../utils/api";
import Product from "./Product";
import { Spinner } from "flowbite-react";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get("/products");
        const result = await response.data.data;
        setProduct(result);
        console.log(result);
      } catch (error) {
        console.log(error.response);
        if (error.message === "Network Error") {
          notifyError(error.message);
          setIsError(true);
        }
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

      {/* {product ? (
          <div className="my-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-between">
            {product.map((data) => (
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
        )} */}
      {!product && (
        <div className="text-center my-10 mt-20 m-auto">
          <Spinner size="xl" />
        </div>
      )}
      {product && (
        <div className="flex flex-wrap  w-[90%] m-auto mb-10">
          <div className="my-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-between">
            {product.map((data) => (
              <Product data={data} key={data.id} />
            ))}
          </div>
        </div>
      )}
      {isError && (
        <p className="text-center font-bold my-10 text-slate-500 uppercase">
          Network Error. Make sure you are connected to the internet.
        </p>
      )}
    </main>
  );
};

export default AllProducts;
