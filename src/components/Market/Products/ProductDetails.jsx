import React, { useEffect, useState } from "react";
import Products from "../Data/Products";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const params = useParams();
  const parameter = params.slug;

  const data = Products.filter((product) => product.id === +parameter);

  return (
    <section>
      <section className="w-[85%] m-auto mb-10">
        {data.map((items) => (
          <div key={items.id} className="flex justify-evenly itesm mt-10">
            <div>
              <div>
                <img src={items.image} alt="" />
              </div>
            </div>
            <div>
              <div>
                <h1>{items.title}</h1>
                <p>{items.category}</p>
                <p>{items.description}</p>
                <p>{parseInt(items.price, 10)}</p>
              </div>
              <div>
                <div>
                  <span
                    className="material-symbols-outlined cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (quantity <= 0) {
                        return;
                      } else {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    remove
                  </span>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    value={quantity}
                  />
                  <span
                    className="material-symbols-outlined cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setQuantity(quantity + 1);
                    }}
                  >
                    add
                  </span>
                </div>
                <div>
                  <p>Total</p>
                  <p>{quantity * +items.price}</p>
                </div>
                <div className="flex justify-between">
                  <button type="submit">Buy Now</button>
                  <button type="submit">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <h1>Related Items</h1>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
