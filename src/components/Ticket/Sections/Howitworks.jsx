import React from "react";
import Category from "./Category";
import find_event from "../../../assets/images/Ticket section/How it works/feature_1.png";
import book_event from "../../../assets/images/Ticket section/How it works/feature_2.png";
import save_date from "../../../assets/images/Ticket section/icons8-calendar-1.gif";
import attend_enjoy from "../../../assets/images/Ticket section/How it works/feature_3.png";

const Howitworks = () => {
  return (
    <div className="text-center mt-20 m-auto w-[90%]">
      <h2 className="text-3xl text-slate-500 font-bold tracking-wider mb-10">
        HOW IT WORKS
      </h2>
      <div className="text-center grid place-content-center place-items-center grid-cols-2 md:grid-cols-4">
        <Category image={find_event} text="FIND EVENTS" className="w-auto" />
        <Category
          image={book_event}
          text="BOOK THE EVENTS"
          className="w-auto"
        />
        <Category image={save_date} text="SAVE THE DATE" className="w-2/3" />
        <Category
          image={attend_enjoy}
          text="ATTEND AND ENJOY"
          className="w-auto"
        />
      </div>
    </div>
  );
};

export default Howitworks;
