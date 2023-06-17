import React from "react";
import Category from "./Category";
import education from "../../../assets/images/Ticket section/education.png";
import technology from "../../../assets/images/Ticket section/technology.png";
import culture from "../../../assets/images/Ticket section/black-history-month.png";
import festival from "../../../assets/images/Ticket section/festival.png";
import fashion from "../../../assets/images/Ticket section/fashion.png";
import fd from "../../../assets/images/Ticket section/food and drink.png";
import concert from "../../../assets/images/Ticket section/concert.png";
import movie from "../../../assets/images/Ticket section/movie.png";
import conference from "../../../assets/images/Ticket section/conference.png";
import others from "../../../assets/images/Ticket section/others.png";
import checked from "../../../assets/images/Ticket section/checked.gif";

//

const Categories = () => {
  return (
    <div className="text-center mt-20 m-auto w-[90%]">
      <h2 className="text-3xl text-slate-500 font-bold tracking-wider mb-10">
        SHUFFLE ACROSS DIFFERENT CATEGORIES
      </h2>
      <div className="text-center grid grid-cols-2 md:grid-cols-4">
        <Category image={technology} text="TECH" />
        <Category image={education} text="EDUCATION" />
        <Category image={culture} text="CULTURE" />
        <Category image={festival} text="FESTIVAL" />
        <Category image={fashion} text="FASHION" />
        <Category image={fd} text="FOOD AND DRINKS" />
        <Category image={concert} text="CONCERT" />
        <Category image={movie} text="MOVIE" />
        <Category image={conference} text="CONFERENCES" />
        <Category image={others} text="OTHERS" />
      </div>
    </div>
  );
};

export default Categories;
