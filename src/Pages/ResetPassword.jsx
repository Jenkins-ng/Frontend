import React, { useState, useEffect } from "react";
import Emailverifybutton from "../components/Buttons/Emailverifybutton";
import Inputfield from "../components/Error & recovery/Inputfield";
import Emailverification from "../components/UI/Emailverification";
Emailverification;

const ResetPassword = () => {
  const [input, setInput] = useState();
  return (
    <Emailverification>
      <section>
        <h1 className="text-blue-400 font-bold sm:text-2xl my-5">
          RESET PASSWORD
        </h1>
      </section>
      <section>
        <form action="">
          <Inputfield
            placeholder="ENTER NEW PASSWORD"
            input={input}
            setinput={setInput}
            title="NEW PASSWORD"
          />
          <Inputfield
            placeholder="ENTER CONFIRM PASSWORD"
            input={input}
            setinput={setInput}
            title="CONFIRM PASSWORD"
          />
          <Emailverifybutton title="RESET PASSWORD" />
        </form>
      </section>
    </Emailverification>
  );
};

export default ResetPassword;
