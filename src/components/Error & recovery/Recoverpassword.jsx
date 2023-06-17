import React from "react";
// import Recoverbutton from "../Buttons/Recoverbutton";
import Emailverifybutton from "../Buttons/Emailverifybutton";
// import Recoveryfinal from "../UI/Recoveryfinal";
import Inputfield from "./Inputfield";
import Emailverification from "../UI/Emailverification";

const Recoverpassword = () => {
  return (
    <Emailverification>
      <h1 className="text-blue-400 text-2xl font-bold tracking-wide">
        Recover password
      </h1>
      <p className="text-slate-400 ">
        please enter the email you used to create your account to recover
        password.
      </p>
      <div className="pt-10">
        <p className="text-sm text-slate-700">Email</p>
        <Inputfield placeholder="Enter email" className="ring-blue-500  mb-4" />
      </div>
      <div className="mt-11">
        <Emailverifybutton title="Get password" />
      </div>
    </Emailverification>
  );
};

export default Recoverpassword;
