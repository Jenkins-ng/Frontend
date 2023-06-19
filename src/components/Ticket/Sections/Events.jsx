import React, { useEffect, useState } from "react";
// import axios from "axios";
import Event from "./Event";
// import { useStateValue } from "../../Store/StateProvider";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";

const Events = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("api.jenkins.ng/api/v1/events")
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
    // return () => {
    //   set
    // };
  }, []);

  return (
    <div>
      {/* {data.map((data) => (
        <Link to={`/events/${data.id}`}>
          <Event data={data} key={data.id} />
        </Link>
      ))} */}
      <h1>EVents</h1>
    </div>
  );
};

export default Events;
