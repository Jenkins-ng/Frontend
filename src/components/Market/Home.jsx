import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="w-full -z-10 mb-6 " src="" alt="" />
        <div className="home__row"></div>
      </div>
      <div className="home">
        <Product />
      </div>
    </div>
  );
};

export default Home;
