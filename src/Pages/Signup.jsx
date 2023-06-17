import React from "react";
import Sign from "../components/UI/sign";
import Signupform from "../components/signup/signupform";
import signupimage from "../assets/Mobile login-cuate.svg";

const Signup = () => {
  return (
    <Sign className="p-10">
      <Signupform />
      <div className="w-1/2 md:block hidden">
        <img src={signupimage} alt="" />
      </div>
    </Sign>
  );
};

export default Signup;
