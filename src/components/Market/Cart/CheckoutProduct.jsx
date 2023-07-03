import React from "react";
import { useStateValue } from "../../Store/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="">
        <p>{title}</p>
        <p>{price}</p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              <p>❤</p>;
            })}
        </div>
        <button type="button" onClick={removeFromCart}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
