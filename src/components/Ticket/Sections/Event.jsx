import React from "react";
import Firsteventimage from "../../../assets/images/Ticket section/headway-F2KRf_QfCqw-unsplash.jpg";

const EventHead = () => {
  return (
    <>
      <div>
        <h1>UPCOMING EVENTS</h1>
      </div>
    </>
  );
};

const Event = (props) => {
  return (
    <>
      <div className="w-5/6 m-auto md:flex">
        <div className="bg-slate-200 m-2 rounded-lg relative mt-5 md:w-auto">
          <div className="overflow-hidden ">
            <img src={Firsteventimage} alt="" className="rounded-lg" />
          </div>
          <div className="p-4">
            <h1>{props.title || "Best seller companion"}</h1>
            <p>{props.info || "saturday, march 18, 2021"}</p>
            <p>{props.description}</p>
            <p>{props.location}</p>
            <div>
              <span className="materials-symbol-outlined"></span>
              <p>
                {props.atttendes}{" "}
                <span>
                  <p>Attendes</p>
                </span>
              </p>
            </div>
          </div>
          <div className="absolute top-[20px] left-4 text-white px-[15px] py-[5px] rounded-lg bg-blue-400 text-sm">
            {props.tag || "FREE"}
          </div>
        </div>
        <div className="bg-slate-200 m-2 rounded-lg relative mt-5 md:w-auto">
          <div className="overflow-hidden ">
            <img src={Firsteventimage} alt="" className="rounded-lg" />
          </div>
          <div className="p-4">
            <h1>{props.title || "Best seller companion"}</h1>
            <p>{props.info || "saturday, march 18, 2021"}</p>
            <p>{props.description}</p>
            <p>{props.location}</p>
            <div>
              <span className="materials-symbol-outlined"></span>
              <p>
                {props.atttendes}{" "}
                <span>
                  <p>Attendes</p>
                </span>
              </p>
            </div>
          </div>
          <div className="absolute top-[20px] left-4 text-white px-[15px] py-[5px] rounded-lg bg-blue-400 text-sm">
            {props.tag || "FREE"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
