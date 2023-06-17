import React, { useState } from "react";
import Inputfield from "./Inputfield";
import Loginbutton from "../Buttons/Loginbutton";
import { Link } from "react-router-dom";
import Logo from "../Landing page/Header/Logo";

const Signupform = () => {
  const [checkbox, ischecked] = useState(false);
  return (
    <div className="md:w-1/3 w-full">
      <form>
        <div>
          <div className="md:hidden block text-center">
            <Logo />
          </div>
          <div className="mb-5 flex justify-between items-center">
            <div>
              <h1 className="text-4xl text- text-blue-400 font-bold tracking-wide">
                Create account
              </h1>
              <p className="text-slate-300 font-semibold text-sm">
                Get started with jenkins.NG by creating an account
              </p>
            </div>
          </div>
          <Inputfield placeholder="Enter Name" label="Name" />
          <Inputfield placeholder="Enter Email" label="Email address" />
          <Inputfield
            placeholder="Enter password"
            label="password"
            type="password"
          />
          <Inputfield
            placeholder="Enter password"
            label="Repeat password"
            type="password"
          />

          <div className="flex gap-3 mt-4">
            <input type="checkbox" />
            <p>
              I've read and I accept the{" "}
              <a href="" className="text-blue-400 font-bold">
                Terms & conditions
              </a>
            </p>
          </div>
          <Loginbutton title="Create account" className="bg-blue-400 w-full" />
          <p className="text-center mt-4">
            Already created an account?{" "}
            <Link to="/signin" className="text-blue-400 font-bold">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signupform;
