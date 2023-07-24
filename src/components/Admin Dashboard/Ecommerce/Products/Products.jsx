import React from "react";
import Wrapper from "../../Wrapper";

const Products = () => {
  return (
    <Wrapper>
      <main className="my-4">
        <h1 className="text-blue-400 font-bold text-2xl my-5">PRODUCT LIST</h1>
        <section>
          <h1 className="uppercase text-center text-xl text-slate-400 font-semibold">
            You have no product yet!
          </h1>
          <section></section>
        </section>
      </main>
    </Wrapper>
  );
};

export default Products;
