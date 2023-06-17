import React from "react";
import Sign from "../../UI/sign";
import Loginbutton from "../../Buttons/Loginbutton";
import Inputfield from "../../signup/Inputfield";
import Contact from "../../../assets/contact us.gif";

const SectionThree = () => {
  return (
    <Sign className="h-full bg-blue-100  px-0 py-0 justify-between md:gap-[50px] my-20 w-full">
      <div className="w-[80%] m-auto flex gap-10">
        <div className="py-5 md:py-2 grid items-center">
          <h1 className="text-blue-400 font-bold text-4xl text-center">
            GET IN TOUCH
          </h1>
          <p className="text-blue-400 mb-5 font-semibold text-center text-lg">
            24/7 We will answer your questions and problems
          </p>
          <div>
            <form>
              <div className="md:flex gap-2">
                <Inputfield label="First Name" placeholder="Abel " />
                <Inputfield
                  label="Last Name"
                  placeholder="James"
                  className="mb-0"
                />
              </div>
              <div className="md:flex gap-2">
                <Inputfield
                  label="Email Address"
                  placeholder="Jenkins@gmail.com"
                />
                <Inputfield
                  label="Phone Number"
                  // className="w-1/2"
                  placeholder="+234-8056-8984-998"
                />
              </div>
              <textarea
                className="w-full bg-slate-300 border-slate-500 outline-slate-500 border-solid mt-2 h-[100px] outline-none p-2 text-sm rounded-xl text-slate-600"
                placeholder="Write your message here."
              >
                Write a message
              </textarea>
              <Loginbutton title="send" className="bg-blue-400 w-full mt-0" />
            </form>
          </div>
        </div>
        <div className="hidden md:grid md:w-full">
          <img src={Contact} className="w-full" alt="" />
        </div>
      </div>
    </Sign>
  );
};

export default SectionThree;
