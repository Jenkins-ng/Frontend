import React, { useState, useEffect } from "react";
import Emailverifybutton from "../components/Buttons/Emailverifybutton";
import Inputfield from "../components/Error & recovery/Inputfield";
import Emailverification from "../components/UI/Emailverification";
Emailverification;
import Error from "../components/Error & recovery/ErrorModal";

const ResetPassword = () => {
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const setShow = (e) => {
    e.preventDefault();
    setOpenModal("pop-up");
    setShowModal((prev) => !showModal);
  };

  return (
    <Emailverification>
      <section>
        <h1 className="text-blue-400 font-bold sm:text-2xl my-5">
          RESET PASSWORD
        </h1>
      </section>
      <section>
        {/* <form> */}
        <Inputfield
          placeholder="ENTER NEW PASSWORD"
          input={firstPassword}
          setinput={setFirstPassword}
          title="NEW PASSWORD"
        />
        <Inputfield
          placeholder="ENTER CONFIRM PASSWORD"
          input={secondPassword}
          setinput={setSecondPassword}
          title="CONFIRM PASSWORD"
        />
        <Emailverifybutton title="RESET PASSWORD" onclick={setShow} />
        {/* </form> */}
      </section>
      <div>
        {showModal ? (
          <Error
            openModal={openModal}
            setOpenModal={setOpenModal}
            message="Your password has been reset successfully!"
            icon=""
            to="signin"
            firstOption="CLOSE"
          />
        ) : (
          ""
        )}
      </div>
    </Emailverification>
  );
};

export default ResetPassword;
