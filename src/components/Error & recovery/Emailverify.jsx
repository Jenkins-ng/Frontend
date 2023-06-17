import React from "react";
import Emailverifybutton from "../Buttons/Emailverifybutton";
import Emailverification from "../UI/Emailverification";
const Emailverify = () => {
  return (
    <Emailverification className="border-blue-600">
      <h1 className="text-blue-900 font-bold text-2xl space-x-2">
        Email Verification
      </h1>
      <p className="text-slate-400">
        Please enter the verification that was sent to your email.
      </p>
      <div className="pt-10">
        <label For="verification code" className="text-sm text-slate-700">
          Verification code
        </label>
        <div className="flex justify-between gap-6 w-2/5 p-10 pt-2 pl-0">
          <input
            type="text"
            placeholder="*"
            className="h-10 w-10 text-center outline-blue-950 bg-slate-200 rounded-sm"
            maxLength={1}
            required
          />
          <input
            type="text"
            placeholder="*"
            className="h-10 w-10 text-center outline-blue-950 bg-slate-200 rounded-sm"
            maxLength={1}
            required
          />
          <input
            type="text"
            placeholder="*"
            className="h-10 w-10 text-center outline-blue-950 bg-slate-200 rounded-sm"
            maxLength={1}
            required
          />
          <input
            type="text"
            placeholder="*"
            className="h-10 w-10 text-center outline-blue-950 bg-slate-200 rounded-sm"
            maxLength={1}
            required
          />
        </div>
        <Emailverifybutton title="Verify email" />
      </div>
    </Emailverification>
  );
};

export default Emailverify;
