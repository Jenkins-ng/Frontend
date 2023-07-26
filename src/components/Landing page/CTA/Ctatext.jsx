import React from "react";
import { Link } from "react-router-dom";
import Ctawrapper from "./Ctawrapper";
// import Signupbutton from "../../Buttons/Signupbutton";
import Typewriter from "typewriter-effect";
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
      >
        <Link to="/signup">GET STARTED</Link>
      </CTAtextcomponent>
    </Ctawrapper>
  );
};

export default Ctatext;
