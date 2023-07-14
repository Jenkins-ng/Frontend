import React from "react";
import StarRating from "../Home/Components/Star";
// import { useStateValue } from "../../Store/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  // const [{ cart }, dispatch] = useStateValue();
  // const removeFromCart = () => {
  //   dispatch({ type: "REMOVE_FROM_CART", id: id });

  return (
    <div className="block mb-5">
      <div className="w-[300px] h-[250px]">
        <img src={image} alt="" className="w-[300px]" />
      </div>
      <div className="">
        <p>{title}</p>
        <p>{price}</p>
        <div className="rating">
          <StarRating rate={rating} />
        </div>
        <button type="button">Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
