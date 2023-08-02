import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Products from "../Data/Products";
import { apiPrivate as api } from "../../../utils/api";
// import Foot from "../Home/Footer/Foot";
// import { Head } from "../Home/Section/Header";
import Product from "./Product";

const ProductByCategory = () => {
  const query = useParams();
  const [category, setCategory] = useState([]);
  const parameter = query.category;
  console.log(parameter);
  // const data = Products.filter((product) => product.category === parameter);
  // console.log(data);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get(`/products/category/${parameter}`);
        const result = await response.data.data;
        setCategory([result]);
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
      {/* <Head /> */}
      <div className="top-[68px] relative overflow-scroll h-[calc(100% - 68px)] Hide">
        <h1 className="text-2xl font-bold text-slate-500 mx-5">
          {parameter.toLocaleUpperCase()}
        </h1>
        <div>
          {/* {category.map((data) => (
          <Product data={data} key={data.id} />
        ))} */}
          {category === "" ? (
            category.map((data) => <Product data={data} key={data.id} />)
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
