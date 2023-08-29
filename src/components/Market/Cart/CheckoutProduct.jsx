import React, { useState, useContext } from "react";
import StarRating from "../Home/Components/Star";
import { CartContext } from "../Context/Cart";
import { apiPrivate as api } from "../../../utils/api";
import notifyError from "../../../utils/notifyError";
import notifySuccess from "../../../utils/notifySuccess";

const ImageUrl = "https://api.jenkins.ng/storage/";

const CheckoutProduct = ({ item, onAdd }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  console.log(item);

  const RemoveFromCart = async (e, item) => {
    e.preventDefault();
    try {
      const response = await api.delete(`/cart/remove/${item}`);
      const result = await response.data;
      notifySuccess(result.message);
      onAdd();
    } catch (error) {
      console.log(error.response);
      notifyError(error.response.data.message);
    }
  };

  const AddToCart = async (e, item) => {
    const product_id = item.product.id;
    console.log(product_id);
    const data = {
      quantity: quantity,
    };

    try {
      const response = await api.put(`/cart/update/${product_id}`, data);
      const result = await response.data;
      notifySuccess(result.message);
      onAdd();
    } catch (error) {
      console.log(error?.response);
      notifyError(error.response?.data?.message);
    }
  };

  return (
    <div className="block mb-5">
      <div className="w-[300px] h-[300px]">
        <img
          src={ImageUrl + item.product.image}
          alt=""
          className="w-[300px] h-[300px]"
        />
      </div>
      <div className="">
        <p>{item.product.title}</p>
        <p># {item.product.price}</p>
        <div className="rating">
          <StarRating rate={5} />
        </div>
        <div>
          <div className="flex gap-5">
            <h1>Quantity: </h1>
            <p>{item.quantity}</p>
          </div>
          <div className="flex items-center py-2 gap-4 md:gap-2">
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (quantity <= 1) {
                  return;
                } else {
                  setQuantity(quantity - 1);
                  AddToCart(e, item);
                }
              }}
            >
              remove
            </span>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={item.quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="text-center outline-none border-slate-400 py-[2px] border-[1px] rounded-lg w-auto"
            />
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setQuantity(quantity + 1);
                AddToCart(e, item);
              }}
            >
              add
            </span>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-slate-400 text-sm sm:text-base md:text-base px-4 py-1 text-white hover:bg-blue-400 rounded-xl"
              onClick={(e) => {
                RemoveFromCart(e, item.product.id);
              }}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
