import React from "react";

const Sign = (props) => {
  const classes = `flex  items-center justify-center justify-center gap-9 w-full + ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Sign;
