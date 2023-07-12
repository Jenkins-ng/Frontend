import React, { useEffect } from "react";
import Products from "../Data/Products";

const ProductDetails = ({ identity }) => {
  const data = (identity) => {
    Products.filter((product) => product.id === identity);
  };
  data(identity);
  console.log(identity);

  return (
    <section>
      <div>
        <div>
          <div>lists of images</div>
          <div>each image</div>
          <div>{data}</div>
        </div>
        <div>
          <div>
            <h1>Name of product</h1>
            <p>price</p>
            <p>description</p>
          </div>
          <div>
            <div>
              <span className="material-symbols-outlined">subtract</span>
              <input type="text" name="quantity" id="quantity" />
              <span className="material-symbols-outlined">add</span>
            </div>
            <button type="submit">Buy Now</button>
          </div>
        </div>
      </div>
      <div>
        <h1>Related Items</h1>
      </div>
    </section>
  );
};

export default ProductDetails;
