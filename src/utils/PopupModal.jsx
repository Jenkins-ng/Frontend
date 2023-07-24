"use client";
import React, { useState } from "react";
import notifySuccess from "../utils/notifySuccess";
import { Button, Modal } from "flowbite-react";

export default function PopUpModal({ openModal, setOpenModal, clearCart }) {
  const props = { openModal, setOpenModal };

  return (
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
              delete
            </span>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to clear your cart?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  props.setOpenModal(undefined);
                  clearCart();
                  notifySuccess("Cart Cleared Successfully!");
                }}
              >
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
