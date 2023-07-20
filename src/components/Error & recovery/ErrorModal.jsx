import React from "react";
import ReactDOM from "react-dom";
import Signupbutton from "../Buttons/Signupbutton";

const Backdrop = (props) => {
  return (
    <div className="w-full h-100vh bg-white blur-lg relative z-20">
      {props.children}
    </div>
  );
};

const Error = (props) => {
  return (
    <Backdrop>
      <div className="w-4/6 m-auto h-2/4">
        <img src={props.img} alt={props.alt} />
        <Signupbutton title="close" />
      </div>
    </Backdrop>
  );
};

const ErrorModal = (props) => {
  return (
    <>{ReactDOM.createPortal(<Error />, document.getElementById("Modals"))}</>
  );
};

export default ErrorModal;
