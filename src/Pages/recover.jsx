import React from "react";
import Recoveryfinal from "../components/UI/Recoveryfinal";
import Signupbutton from "../components/Buttons/Signupbutton";

const Recover = () => {
  return (
    <Recoveryfinal>
      <p className="text-sm text-blue-900 font-semibold">
        A 4-digits verification code has been sent to your email. <br />
        Check your email to copy verification code.
      </p>
      <Signupbutton title="Proceed" className="px-8 py-4" />
    </Recoveryfinal>
  );
};

export default Recover;
