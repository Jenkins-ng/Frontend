import React from "react";
import Header from "./Home/Section/Header";
import Categories from "./Home/Section/Catergories";
import TopProducts from "./Products/TopProducts";
import Benefits from "./Home/Benefits/Benefit";
import Foot from "./Home/Footer/Foot";
import Data from "./Data/Categoriesdata";
import Category from "./Home/Section/Category";

const Market = () => {
  return (
    <>
      <Header />
      <Categories />
      <TopProducts />
      <Benefits />
      {/* <Foot /> */}
    </>
  );
};

export default Market;
