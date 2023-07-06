import React from "react";
import Ctawrapper from "../Landing page/CTA/Ctawrapper";
import Head from "../Landing page/Header/Head";
import Filter from "./Sections/Filter";
import Event from "./Sections/Event";
import Categories from "./Sections/Categories";
import Howitworks from "./Sections/Howitworks";
import Keepup from "./Sections/Keepup";
import Partners from "./Sections/Partners";
import Foot from "../Landing page/Footer/foot";
import CTAtextcomponent from "../Landing page/CTA/CTAtextcomponent";
import state, { StateProvider } from "../../Store/TicketProvider";
import { initialState } from "../../Store/TicketReducer";
import Reducer from "../../Store/TicketReducer";
// import Events from "./Sections/Events";

//

const Ticket = () => {
  return (
    <StateProvider initialState={initialState} reducer={Reducer}>
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
      <Keepup />
      <Partners />
      <Foot />
    </StateProvider>
  );
};

export default Ticket;
