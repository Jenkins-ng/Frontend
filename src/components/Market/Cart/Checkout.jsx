import React from "react";
import Products from "../Data/Products";
// import { useStateValue } from "../../../Store/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  // const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout ">
      <div className="checkout__left">
        <img className="checkout__ad" src="" alt="" />
        <div>
          <h2 className="checkout__title">Your Cart</h2>
          <div>
            {Products.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <h2>Your subtotal will be here</h2>
      </div>
    </div>
  );
};

export default Checkout;
