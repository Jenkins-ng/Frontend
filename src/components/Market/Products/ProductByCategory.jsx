import React from "react";
import { useParams } from "react-router-dom";
import Products from "../Data/Products";
import Product from "./Product";

const ProductByCategory = () => {
  const query = useParams();
  const parameter = query.category;
  console.log(parameter);
  const data = Products.filter((product) => product.category === parameter);
  console.log(data);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-500 m-5">
        {parameter.toLocaleUpperCase()}
      </h1>
      <div>
        {data.map((data) => (
          <Product data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductByCategory;
