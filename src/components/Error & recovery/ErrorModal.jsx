"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
// import notifySuccess from "../utils/notifySuccess";
import { Button, Modal } from "flowbite-react";
import Signupbutton from "../Buttons/Signupbutton";

const Backdrop = (props) => {
  return (
    <div className="w-full h-100vh bg-white blur-lg relative z-20">
      {props.children}
    </div>
  );
};

export const Error = ({
  openModal,
  setOpenModal,
  message,
  icon,
  firstOption,
  secondOption,
}) => {
  const props = { openModal, setOpenModal };
  const history = useNavigate();

  return (
    <Backdrop>
      <>
        <Modal
          show={props.openModal === "pop-up"}
          size="md"
          popup
          onClose={() => props.setOpenModal(undefined)}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
              <span className="material-symbols-outlined mx-auto flex justify-center items-center font-extrabold mb-4 h-14 w-14 rounded-full text-4xl text-red-700 bg-slate-400 dark:text-gray-200">
                {icon}
              </span>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {message}
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="success"
                  onClick={() => {
                    props.setOpenModal(undefined);
                    history("/recover");
                  }}
                >
                  {firstOption}
                </Button>
                {secondOption ? (
                  <Button
                    color="gray"
                    onClick={() => props.setOpenModal(undefined)}
                  >
                    {secondOption}
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </Backdrop>
  );
};

// const ErrorModal = (props) => {

//   return (
//     <>{ReactDOM.createPortal(<Error />, document.getElementById("Modals"))}</>
//   );
// };

export default Error;
