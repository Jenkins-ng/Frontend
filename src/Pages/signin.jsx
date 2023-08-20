import React from "react";
import Sign from "../components/UI/sign";
import signupimage from "../assets/Tablet login-rafiki.svg";
import Signinform from "../components/Signin/Signinform";
import Signupbutton from "../components/Buttons/Signupbutton";

const Signin = (props) => {
  return (
    <Sign className="h-[100vh] p-10">
      <Signinform token={props.setToken} />
      <div className="w-1/2 md:block hidden">
        <img src={signupimage} alt="" />
      </div>
    </Sign>
  );
};

export default Signin;
