import React from "react";
import Header from "./Home/Section/Header";
import Categories from "./Home/Section/Catergories";
import TopProducts from "./Products/TopProducts";
import Benefits from "./Home/Benefits/Benefit";
import Reviews from "../Landing page/Reviews/Reviews";
import brands from "../../utils/brands";
import { CartProvider } from "./Context/Cart";

const Market = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Categories />
        <TopProducts />
        <Benefits />
        <div className="md:w-5/6 w-[90%] m-auto my-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-slate-500 uppercase mb-3">
            Our Partners
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-5 items-center gap-3">
            {brands.map((src, i) => {
              return <img src={src} alt="" key={i} className="w-4/6 m-auto" />;
            })}
          </div>
        </div>
        <Reviews />
      </CartProvider>
    </>
  );
};

export default Market;
