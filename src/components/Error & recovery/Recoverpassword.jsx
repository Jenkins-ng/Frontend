import React, { useState } from "react";
// import Recoverbutton from "../Buttons/Recoverbutton";
import Emailverifybutton from "../Buttons/Emailverifybutton";
// import Recoveryfinal from "../UI/Recoveryfinal";
import Inputfield from "./Inputfield";
import Emailverification from "../UI/Emailverification";
import Error from "./ErrorModal";
import { Link } from "react-router-dom";

const Recoverpassword = () => {
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState();
  const [showModal, setShowModal] = useState(true);

  const setShow = (e) => {
    e.preventDefault();
    setOpenModal("pop-up");
    setShowModal((prev) => !showModal);
  };
  console.log(input);

  const Submit = () => {};

  return (
    <Emailverification>
      <h1 className="text-blue-400 text-2xl mb-3 font-bold tracking-wide">
        Recover password
      </h1>
      <p className="text-slate-400 ">
        please enter the email you used to create your account to recover
        password.
      </p>
      <form>
        <div className="pt-10">
          <p className="text-sm text-slate-700 font-bold">Email: </p>
          <Inputfield
            placeholder="Enter email"
            className="ring-blue-500  mb-4"
            input={input}
            setInput={setInput}
          />
        </div>
        <div className="mt-11">
          <Link to="/recover">
            <Emailverifybutton title="GET PASSWORD" onclick={setShow} />
          </Link>
        </div>
      </form>
      <div>
        {showModal ? (
          <Error
            openModal={openModal}
            setOpenModal={setOpenModal}
            message="A 4-digit Email has been sent to your email address"
            icon=""
            to="recover"
            firstOption="CLOSE"
          />
        ) : (
          ""
        )}
      </div>
    </Emailverification>
  );
};

export default Recoverpassword;
