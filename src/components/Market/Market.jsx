import React from "react";
import Header from "./Home/Section/Header";
import Categories from "./Home/Section/Catergories";
import TopProducts from "./Products/TopProducts";
import Benefits from "./Home/Benefits/Benefit";
import Reviews from "../Landing page/Reviews/Reviews";
import { CartProvider } from "./Context/Cart";

const Market = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Categories />
        <TopProducts />
        <Benefits />
        <Reviews />
      </CartProvider>
    </>
  );
};

export default Market;
