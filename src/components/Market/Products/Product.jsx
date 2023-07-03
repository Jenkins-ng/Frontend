import React from "react";
import { useStateValue } from "../../../Store/StateProvider";

const Product = (data) => {
  // const [state, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        description: data.description,
        rating: data.rating,
      },
    });
  };
  return (
    <div className="shadow-xl rounded-xl bg-black">
      <div className="product__info">
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p className="Product__price">
          <small>$</small>
          <strong>{data.price}</strong>
        </p>
        <div className="product__rating">
          {Array(data.rating)
            .fill()
            .map((_, i) => {
              <p>❤</p>;
            })}
        </div>
      </div>
      <div>
        <img src={data.image} alt="" />
      </div>
      <button onClick={addToCart}>Add to cart </button>
    </div>
  );
};

export default Product;
