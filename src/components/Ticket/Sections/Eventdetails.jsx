import React, { useEffect, useState } from "react";
import Ctawrapper from "../../Landing page/CTA/Ctawrapper";
import Signupbutton from "../../Buttons/Signupbutton";
import { useParams } from "react-router-dom";

const Eventtextcomponent = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const fetchDetails = () => {
    fetch(`https://api.jenkins.ng/api/v1/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <div className="flex">
        <div>
          <h1>{event.Heading}</h1>
          <p>{event.location}</p>
          <p>{event.description}</p>
          <span>
            <span className="material-symbols-outlined">map</span>
            <span>View map</span>
          </span>
        </div>
        <div>
          <div>
            <h1>Date & time</h1>
            <p>{event.date}</p>
          </div>
          <Signupbutton title="Book now" />
          <p>{event.refund}</p>
        </div>
      </div>
      <Eventdetailsbody items={event} />
    </>
  );
};

const Eventdetailsbody = (props) => {
  return (
    <div>
      <div>
        <div>
          <h1>Description</h1>
          <p>{props.description}</p>
        </div>
        <div>
          <h1>Hours</h1>
          <p>{props.time}</p>
        </div>
        <div>
          <h1>Organizer contact</h1>
          <p>{`${props.organizer} || "please refer to our FAQ section for more details."`}</p>
        </div>
      </div>
      <div>
        <div>
          <h1>Event location</h1>
        </div>
        <div>
          <h1>Tags</h1>
        </div>
        <div>
          <h1>Share with friends</h1>
          <span>
            <span classname="material-symbols-outlined">facebook</span>
            <span classname="material-symbols-outlined">whatapp</span>
            <span classname="material-symbols-outlined">linkedin</span>
            <span classname="material-symbols-outlined">twitter</span>
          </span>
        </div>
      </div>
    </div>
  );
};

const Eventsuggest = () => {
  return (
    <div>
      <div>
        <h1>Other events you may like</h1>
      </div>
    </div>
  );
};

const Eventdetails = () => {
  return (
    <>
      <Ctawrapper>
        <Head />
        <Eventtextcomponent />
      </Ctawrapper>
    </>
  );
};

export default Eventdetails;
