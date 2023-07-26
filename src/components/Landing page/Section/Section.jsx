import React from "react";
import Prototype from "./Prototype";
import FirstImage from "../../../assets/images/tutorial.jpg";
import SecondImage from "../../../assets/images/job.jpg";
import ThirdImage from "../../../assets/images/training.jpg";
import FourthImage from "../../../assets/images/shop.jpg";
import FifthImage from "../../../assets/images/ticket.jpg";
const Section = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-blue-400 text-3xl tracking-widest mt-14">
        WHAT WE OFFER?
      </h2>
      <div className="md:grid lg:grid-cols-1 gap-9 sm:gap-2 block justify-between w-full md:w-[95%] m-auto overflow-hidden mt-8">
        <Prototype
          src={SecondImage}
          Id="TIRED OF YOUR JOB?"
          heading="Become so powerful that your competitors become your allies. Reach the top position and work smart with competition."
          text="Jobs near me"
          to="/job"
        />
        <Prototype
          src={FourthImage}
          Id="MARKET"
          heading="We display to our viewers quality products on our site and the benefit they would get."
          text="Start Buying"
          to="/shop"
          className="flex-row-reverse"
        />
        {/* <Prototype
          src={ThirdImage}
          Id="TRAININGS AND CERTIFICATION"
          heading="Become so powerful that your competitors become your allies. Reach the top position and work smart with competition."
          text="Click here to get upskilled"
          to="/training"
        /> */}
        {/* <Prototype
          src={ThirdImage}
          Id="LEARN ONLINE SEAMLESSLY"
          heading="Increase your knowledge, and clear your doubt with tons of tutorials from the comfort of your house."
          text="Start Learning"
          className="flex-row-reverse"
          to="/tutorial"
        /> */}
        <Prototype
          src={FifthImage}
          Id="EVENTS AND BOOKINGS"
          heading="All work and no play makes ......"
          break="Tired of staying at home or don't know where to have fun?"
          text="Book an event"
          to="/event"
        />
      </div>
    </div>
  );
};

export default Section;
