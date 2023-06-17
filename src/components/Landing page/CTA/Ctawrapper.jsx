import React from "react";

const Ctawrapper = (props) => {
  const classes = `h-[100vh] bg-neutral-700 bg-blend-overlay bg-cover bg-center relative + ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default Ctawrapper;
