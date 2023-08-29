import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
// import Products from "../Data/Products";
import { apiPrivate as api } from "../../../utils/api";
// import Foot from "../Home/Footer/Foot";
// import { Head } from "../Home/Section/Header";
import Product from "./Product";

const ProductByCategory = () => {
  const query = useParams();
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const parameter = query.category;
  console.log(parameter);
  // const data = Products.filter((product) => product.category === parameter);
  // console.log(data);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get(`/products/category/${parameter}`);
        const result = await response.data.data;
        setCategory(result);
        setIsLoading(false);
        console.log(category);
        console.log(result);
      } catch (error) {
        // console.log(error.response);
      }
    }
    fetch();
  }, []);

  return (
    <main>
      <div className="top-[6px] pt-20 relative overflow-scroll h-[calc(100% - 68px)] Hide">
        <h1 className="text-2xl font-bold text-slate-500 mx-5">
          {parameter.toLocaleUpperCase()}
        </h1>
        <div>
          {/* {category.map((data) => (
          <Product data={data} key={data.id} />
        ))} */}
          {isLoading && (
            <div className="text-center my-10 m-auto">
              <Spinner size="xl" />
            </div>
          )}
          {category ? (
            <div className="my-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between">
              {category.map((data) => (
                <Product data={data} key={data.id} />
              ))}
            </div>
          ) : (
            <p className="uppercase text-xl text-slate-500 font-bold text-center my-10">
              No Product Under this category
            </p>
          )}
        </div>
      </div>
      {/* <Foot /> */}
    </main>
  );
};

export default ProductByCategory;
