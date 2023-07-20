import React, { useState, useContext } from "react";
import StarRating from "../Home/Components/Star";
import { CartContext } from "../Context/Cart";

const CheckoutProduct = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { removeFromCart } = useContext(CartContext);
  console.log(item);

  return (
    <div className="block mb-5">
      <div className="w-[300px] h-[250px]">
        <img src={item.image} alt="" className="w-[300px]" />
      </div>
      <div className="">
        <p>{item.title}</p>
        <p>{item.price}</p>
        <div className="rating">
          <StarRating rate={item.rating} />
        </div>
        <div>
          <div className="flex gap-5">
            <h1>Quantity</h1>
            <p>{item.quantity}</p>
          </div>
          <div className="flex items-center py-2">
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (quantity <= 1) {
                  return;
                } else {
                  setQuantity(quantity - 1);
                }
              }}
            >
              remove
            </span>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="text-center outline-none border-slate-400 border-[1px] rounded-lg w-auto"
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
          <button
            type="button"
            className="bg-slate-400 text-sm sm:text-base md:text-base px-4 py-1 text-white hover:bg-blue-400 rounded-xl"
            onClick={() => {
              removeFromCart(item);
            }}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
