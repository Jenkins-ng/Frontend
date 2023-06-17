import React from "react";
import Ctawrapper from "../components/Landing page/CTA/Ctawrapper";
import Head from "../components/Landing page/Header/Head";
import Filter from "../components/Ticket/Sections/Filter";
import Event from "../components/Ticket/Sections/Event";
import Categories from "../components/Ticket/Sections/Categories";
import Howitworks from "../components/Ticket/Sections/Howitworks";
import Keepup from "../components/Ticket/Sections/Keepup";
import Partners from "../components/Ticket/Sections/Partners";
import Foot from "../components/Landing page/Footer/foot";
import CTAtextcomponent from "../components/Landing page/CTA/CTAtextcomponent";

//

const Ticket = () => {
  return (
    <>
      <Ctawrapper className="bg-Ticket">
        <Head />
        <CTAtextcomponent
          headline="MADE FOR THOSE WHO DO"
          title="FInd events around you"
          className=" tracking-normal text-blue-300 md:text-2xl text-base"
        />
      </Ctawrapper>
      <div>
        <form action="">
          <Filter />
        </form>
      </div>
      <Event />
      <Categories />
      <Howitworks />
      {/* <Keepup /> */}
      <Partners />
      <Foot />
    </>
  );
};

export default Ticket;
