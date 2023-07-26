import React from "react";

const Sign = (props) => {
  const classes = `flex  items-center  content-center justify-center  gap-9 w-full  m-auto h-[100vh] + ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Sign;
