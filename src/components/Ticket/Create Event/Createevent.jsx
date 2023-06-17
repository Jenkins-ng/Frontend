import React, { useReducer } from "react";
import Head from "../../Landing page/Header/Head";
import Foot from "../../Landing page/Footer/foot";
import Signupbutton from "../../Buttons/Signupbutton";
import Inputfield from "../../signup/Inputfield";
import Loginbutton from "../../Buttons/Loginbutton";

const Createevent = () => {
  const [Eventstate, Dispatchfn] = useReducer((state, action) => {}, {
    Eventtitle: "",
    Eventvenue: "",
    Startdate: "",
    Enddate: "",
    Starttime: "",
    Endtime: "",
    Eventflier: "",
    Eventdescription: "",
  });
  const createEventHandler = () => {
    console.log(Eventstate);
  };

  return (
    <div className="">
      <Head />
      <div className="relative top-[120px]">
        <div className="md:w-4/5/6 w-4/6 m-auto mb-20">
          <div className="">
            <h1 className="text-center text-2xl font-bold text-blue-400 tracking-wider">
              CREATE EVENT
            </h1>
            <div className="mt-10">
              <div className="md:flex md: gap-20">
                <Inputfield
                  label="Enter Title"
                  placeholder="Enter the name of the event."
                  value={Eventstate.Eventtitle}
                  onChange={props.onchangehandler || ""}
                  onBlur={props.onblurhandler || ""}
                />
                <Inputfield
                  label="Event Venue"
                  placeholder="Enter a detailed venue of your event."
                  value={Eventstate.Eventvenue}
                />
              </div>
              <div className="md:flex gap-20">
                <Inputfield
                  label="Start Date"
                  placeholder="Enter the start date of your event"
                  type="date"
                  value={Eventstate.Startdate}
                />
                <Inputfield
                  label="End Date"
                  placeholder="Enter the end date of your event"
                  type="date"
                  value={Eventstate.Enddate}
                />
              </div>
              <div className="md:flex gap-20">
                <Inputfield
                  label="Start Time"
                  placeholder="Enter the start time of your event"
                  type="time"
                  value={Eventstate.Starttime}
                />
                <Inputfield
                  label="End Time"
                  placeholder="Enter the end time of your event"
                  type="time"
                  value={Eventstate.Endtime}
                />
              </div>
              <div className="md:flex gap-20">
                <Inputfield
                  label="Event Category"
                  placeholder="Enter the start time of your event"
                  type="time"
                  value={Eventstate.Starttime}
                />
                <Inputfield
                  label="Tags"
                  placeholder="Enter the tags for your event"
                  type="text"
                  value={Eventstate.tags}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold text-blue-400 tracking-wider my-10">
              EVENT DESCRIPTION
            </h1>
            <div>
              <Inputfield
                label="Event Image/Flier"
                placeholder=""
                type="file"
                value={Eventstate.Eventimage}
              />
              <div></div>
            </div>
            <div>
              {/* <label htmlFor="description" className="block">
                Event Description
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </label> */}
              <Inputfield
                label="Event Description"
                placeholder="Enter your event description"
                type="text"
                value={Eventstate.Eventdescription}
              />
            </div>
          </div>
          <Loginbutton
            title="Create Event"
            className="w-full mt-20 bg-blue-400"
            onClick={createEventhandler}
          />
        </div>
        <Foot />
      </div>
    </div>
  );
};

export default Createevent;
