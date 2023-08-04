import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Emailverifybutton from "../Buttons/Emailverifybutton";
import Emailverification from "../UI/Emailverification";
import Spinner from "../../utils/spinner";
import { apiPrivate as api } from "../../utils/api";

const Emailverify = () => {
  const [firstInput, setfirstInput] = useState("");
  const [secondInput, setsecondInput] = useState("");
  const [thirdInput, setthirdInput] = useState("");
  const [fourthInput, setfourthInput] = useState("");
  // const [showSpinner, setshowSpinner] = useState(false);

  // const setSpinner = (e) => {
  //   e.preventDefault();
  //   setshowSpinner((prev) => showSpinner);
  // };

  const submitToken = async () => {
    const response = await api.post()
  }

  return (
    <Emailverification className="border-blue-600">
      {/* <Spinner /> */}
      <h1 className="text-blue-900 font-bold text-2xl space-x-2">
        Email Verification
      </h1>
      <p className="text-slate-400">
        Please enter the verification that was sent to your email.
      </p>
      <form action="">
        <div className="pt-10 w-2/5 m-auto text-center">
          <p
            // For="verification code"
            className="text-sm sm:text-xl md:text-2xl text-slate-700 font-bold py-10"
          >
            Verification code
          </p>
          <div className="flex justify-between gap-6 m-auto p-10 pt-5 pl-0">
            <input
              type="tel"
              placeholder="*"
              value={firstInput}
              onChange={(e) => setfirstInput(e.target.valueAsNumber)}
              className="h-10 w-10 text-center outline-blue-950 bg-slate-200 rounded-sm"
              maxLength={1}
              required
            />
            <input
              type="tel"
              placeholder="*"
              value={secondInput}
              onChange={(e) => setsecondInput(e.target.valueAsNumber)}
              className="h-10 w-10 text-center outline-blue-950 bg-slate-200 rounded-sm"
              maxLength={1}
              required
            />
            <input
              type="tel"
              placeholder="*"
              className="h-10 w-10 text-center outline-blue-950 bg-slate-200 rounded-sm"
              value={thirdInput}
              onChange={(e) => setthirdInput(e.target.valueAsNumber)}
              maxLength={1}
              required
            />
            <input
              type="text"
              placeholder="*"
              className="h-10 w-10 text-center outline-blue-950 bg-slate-200 rounded-sm"
              value={fourthInput}
              onChange={(e) => setfourthInput(e.target.valueAsNumber)}
              maxLength={1}
              required
            />
          </div>
          <Link to="/reset-password">
            <Emailverifybutton
              title="VERIFY EMAIL"
              // showSpinner={showSpinner}
              // setshowSpinner={setshowSpinner}
              // setSpinner={setSpinner}
            />
          </Link>
        </div>
      </form>
    </Emailverification>
  );
};

export default Emailverify;
