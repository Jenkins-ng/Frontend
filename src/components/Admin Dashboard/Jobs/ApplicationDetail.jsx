import React from "react";
import { createPortal } from "react-dom";

const ApplicationDetail = () => {
  return createPortal({}, document.getElementById("modal"));
};

export default ApplicationDetail;
