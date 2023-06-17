import React from "react";

const Recoveryfinal = (props) => {
  return (
    <div className="w-2/5 h-2/5 m-auto items-center text-center grid p-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-slate-200 border-solid border-2 rounded-lg">
      {props.children}
    </div>
  );
};

export default Recoveryfinal;
