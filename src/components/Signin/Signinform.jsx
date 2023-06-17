import React from "react";
import Inputfield from "../signup/Inputfield";
import Loginbutton from "../Buttons/Loginbutton";
import Logo from "../Landing page/Header/Logo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Signinform = (props) => {
  return (
    <>
      <div className="md:w-1/3 w-full">
        <form>
          <div>
            <div className="md:hidden block text-center">
              <Logo />
            </div>
            <div className="mb-10">
              <h1 className="text-4xl text-blue-400 font-bold tracking-wider mb-2">
                Log In
              </h1>
              <p className="text-slate-300 font-semibold text-sm">
                Welcome back, enter details to pick up where you left off.
              </p>
            </div>
            <Inputfield
              placeholder="Enter Email or Username"
              label="Email or Username"
            />
            <Inputfield placeholder="Enter password" label="password" />
            <div className="text-right -mt-2">
              <Link
                to="/signin/recover"
                className="text-blue-400 font-bold text-rights"
              >
                forgot password
              </Link>
            </div>
            <Loginbutton title="Log In" className="bg-blue-400 w-full" />
            <p className="text-center mt-4">
              Yet to create account?{" "}
              <Link to="/signup" className="text-blue-400 font-bold">
                Create account
              </Link>
            </p>
          </div>
        </form>
        <div className="mt-3">
          <h1 className="text-center font-bold">OR</h1>
          <Loginbutton
            title="Log in with Facebook"
            className="bg-slate-400 text-blue-400 w-full"
          />
          <Loginbutton
            title="Log in with Goggle"
            className="bg-slate-400 text-blue-900 mt-0 w-full"
          />
        </div>
      </div>
    </>
  );
};

Login.PropTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Signinform;
