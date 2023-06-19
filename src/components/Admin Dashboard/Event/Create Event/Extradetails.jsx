import React from "react";
import Inputfield from "../../../signup/Inputfield";
import Signupbutton from "../../../Buttons/Signupbutton";
import { ClassNames } from "@emotion/react";

const Extradetails = () => {
  return (
    <div>
      <h1>Organizer's Details</h1>
      <div>
        <Inputfield
          title="Organizer's Email Address"
          placeholder="Enter your Email address"
        />
        <Inputfield
          title="Organizer's Name"
          placeholder="Enter the organizer's name"
        />
      </div>
      <div>
        <Signupbutton title="NEXT" />
      </div>
    </div>
  );
};

export default Extradetails;
