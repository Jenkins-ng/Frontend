import React from "react";
import Ctawrapper from "../Landing page/CTA/Ctawrapper";
import Head from "../Landing page/Header/Head";
import Foot from "../Landing page/Footer/foot";

const Error = (props) => {
  return (
    <>
      <Ctawrapper>
        <Head />
      </Ctawrapper>
      <div>
        <img src={props.image} alt={props.alt} />
      </div>
      <Foot />
    </>
  );
};

export default Error;
