import React from "react";
import { useParams } from "react-router-dom";
// import { useStateValue } from "../../../Store/TicketProvider";
import Eventdetails from "./Eventdetails";

const DetailedEvents = () => {
  const [{ cart }, dispatch] = useStateValue();
  const params = useParams();
  return (
    <>
      <div>
        {cart.map((item) => (
          <Eventdetails item={item} />
        ))}
      </div>
      <div>{params}</div>
    </>
  );
};

export default DetailedEvents;
