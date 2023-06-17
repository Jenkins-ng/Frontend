import React from "react";
import Ctawrapper from "./Ctawrapper";
import Signupbutton from "../../Buttons/Signupbutton";
import Head from "../Header/Head";
import CTAtextcomponent from "./CTAtextcomponent";

const Ctatext = () => {
  return (
    <Ctawrapper className="bg-CTA">
      <Head />
      <CTAtextcomponent
        headline="STOP. SHOP. REPEAT."
        tagword=" Enjoy the comfort of clicking away your needs."
        title="GET STARTED"
      />
    </Ctawrapper>
  );
};

export default Ctatext;
