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
      <h1>{parameter}</h1>
      <div>{<Product data={data[0]} key={data[0].id} />}</div>
    </div>
  );
};

export default ProductByCategory;
