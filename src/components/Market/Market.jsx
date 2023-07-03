import React from "react";
import Header from "./Home/Section/Header";
import CTA from "../Landing page/CTA/Ctawrapper";
import CTAtextcomponent from "../Landing page/CTA/CTAtextcomponent";
import Foot from "../Landing page/Footer/foot";
import state, { StateProvider } from "../../Store/StateProvider";
import { initialState } from "../../Store/Reducer";
import Reducer from "../../Store/Reducer";
import Category from "./Home/Section/Category";
import Catergories from "./Home/Section/Catergories";
import TopProducts from "./Products/TopProducts";

const Market = () => {
  return (
    // <StateProvider initialState={initialState} reducer={Reducer}>
    <main>
      <CTA className="bg-Shop">
        <Header />
        <CTAtextcomponent
          headline="STOP. SHOP. REPEAT."
          tagword=" Enjoy the comfort of clicking away your needs."
          title="START BUYING"
        />
      </CTA>
      <section className="relative">
        <Catergories />
        <section>
          <h1>Top Categories</h1>
          <Catergories />
        </section>
        <section>
          <h1>Top Products</h1>
          <TopProducts />
        </section>
        <section>
          <h1>Men's Fashion</h1>
          <TopProducts />
        </section>
        <section>
          <h1>Women's Fashion</h1>
          <TopProducts />
        </section>
        <section>
          <h1>Phones & Tablets</h1>
          <TopProducts />
        </section>
        <section>
          <h1>Computing</h1>
          <TopProducts />
        </section>
      </section>
      <footer>
        <Foot />
      </footer>
    </main>
    // </StateProvider>
  );
};

export default Market;
