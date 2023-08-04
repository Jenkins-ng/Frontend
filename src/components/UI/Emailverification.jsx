import React from "react";

const Emailverification = (props) => {
  return (
    <main className=" sm:w-4/5 md:w-3/5 lg:2/5 xl:1/2 w-4/5 m-auto p-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-slate-200 border-solid border-2 rounded-lg">
      {props.children}
    </main>
  );
};

export default Emailverification;
