import React from "react";
import { Link } from "react-router-dom";
import Loginbutton from "../Buttons/Loginbutton";

const EventCard = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <div>
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <div>
          <span></span>
        </div>
      </div>
      <div>
        <Loginbutton title="Register" />
      </div>
    </div>
  );
};

export default EventCard;
