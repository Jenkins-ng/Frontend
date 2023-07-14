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
          <div key={items.id} className="md:flex justify-evenly items mt-10">
            <div>
              <div>
                <img src={items.image} alt="" />
              </div>
            </div>
            <div className="my-5">
              <div>
                <h1 className="text-2xl font-bold text-blue-400">
                  {items.title}
                </h1>
                <div className="text-lg">
                  <p>{items.category}</p>
                  <p>{items.description}</p>
                  <p className="font-bold text-blue-400">
                    <span>
                      <strike>N</strike>{" "}
                    </span>
                    {parseInt(items.price, 10)}
                  </p>
                </div>
              </div>
              <div>
                <div className="my-4">
                  <span
                    className="material-symbols-outlined cursor-pointer bg-slate-400 w-auto p-2 rounded-full text-white"
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
                    className="text-center outline-none"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <span
                    className="material-symbols-outlined cursor-pointer bg-slate-400 w-auto p-2 rounded-full text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      setQuantity(quantity + 1);
                    }}
                  >
                    add
                  </span>
                </div>
                <div className="flex gap-5 text-lg font-regular">
                  <p>Total :</p>
                  <p>{quantity * +items.price}</p>
                </div>
                <div className="flex justify-between my-2">
                  <button
                    type="submit"
                    className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
                  >
                    Buy Now
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <h1 className="text-xl md:text-2xl text-blue-400 font-bold my-3">
            Related Items
          </h1>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
