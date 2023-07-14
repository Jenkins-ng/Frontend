import React from "react";
import Products from "../Data/Products";
// import { useStateValue } from "../../../Store/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  // const [{ cart }, dispatch] = useStateValue();
  return (
    <section className="m-auto flex justify-between w-6/6 my-10">
      <main className="m-auto w-4/6">
        <img className="" src="" alt="" />
        <div className="my-5">
          <h2 className="font-bold text-blue-400 mb-4 text-2xl w-5/6 m-auto">
            YOUR CART
          </h2>
          <div className="flex m-auto flex-wrap justify-between w-5/6">
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
      </main>
      <aside className="m-auto w-2/6 my-5">
        <h2 className="text-blue-400 text-2xl mb-4 font-bold">
          Your subtotal will be here
        </h2>
        <div className="border-slate-400 border-[1px]"></div>
      </aside>
    </section>
  );
};

export default Checkout;
