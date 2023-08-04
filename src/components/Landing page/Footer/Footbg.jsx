import React from "react";

const Footbg = (props) => {
  return (
    <footer className="px-10 py-6 bg-slate-200 mt-10">{props.children}</footer>
  );
};

export default Footbg;
