import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({ img, college, location }) => {
  return (
    <Link
      to="/event/college"
      className="bg-white rounded-lg shadow-lg hover:scale-[1.03] duration-300"
    >
      <img src={img} alt="" className="w-full" />
      <h3 className="px-6 py-6">{college}</h3>
      <div className="flex px-6 py-6 justify-between items-center">
        <p>{location}</p>
        <div className="w-[50px] h-[50px] rounded-full bg-[#f2f2f2] grid place-content-center">
          <BiDotsHorizontalRounded size={30} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
