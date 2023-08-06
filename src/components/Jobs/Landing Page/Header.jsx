import React, { useContext } from "react";
import Ctawrapper from "../../Landing page/CTA/Ctawrapper";
import CTAtextcomponent from "../../Landing page/CTA/CTAtextcomponent";
import Logo from "../../Landing page/Header/Logo";
import { Link } from "react-router-dom";
import Signupbutton from "../../Buttons/Signupbutton";
import { AuthContext } from "../../../context/AuthContext";

export const Head = () => {
  const { auth } = useContext(AuthContext);
  return (
    <header className="grid grid-flow-col justify-between items-center content-center px-5 py-4 sm:h-18">
      <div className="flex sm:gap-20 gap-5 items-center">
        <Link to="/">
          <Logo />
        </Link>
        <ul>
          <li className="text-slate-500 font-bold text-lg sm:text-xl tracking-tighter sm:tracking-wide ">
            <Link to="/jobs">FIND JOBS</Link>
          </li>
        </ul>
      </div>

      {auth ? (
        <div className="flex gap-2 sm:gap-5">
          <>
            {/* <Signupbutton className="bg-blue-400">
              <Link to="/signup">SIGNUP</Link>
            </Signupbutton>
            <Signupbutton className="bg-blue-400">
              <Link to="/signin">LOGIN</Link>
            </Signupbutton> */}
            <Link to="signup">
              <button
                type="submit"
                className="sm:px-7 sm:py-2 px-5 py-[4px] text-slate-500 bg-blue-400 font-bold rounded-lg"
              >
                SIGNUP
              </button>
            </Link>
            <Link to="/signin">
              <button
                type="submit"
                className="sm:px-7 sm:py-2 px-5 py-[4px] text-slate-500 bg-blue-400 font-bold rounded-lg"
              >
                LOGIN
              </button>
            </Link>
          </>
        </div>
      ) : (
        <div>
          <p>
            Welcome, <span>{auth.user}</span>
          </p>
        </div>
      )}
    </header>
  );
};

const Header = () => {
  return (
    <nav>
      <div>
        <Ctawrapper className="bg-Job">
          <CTAtextcomponent
            headline="DISCOVER MORE THAN 500+ JOBS."
            tagword=" Great Platform For Job Seekers That Are Searching For New Career Heights."
            title="DISCOVER JOBS"
          >
            <Link to="/jobs">DISCOVER JOBS</Link>
          </CTAtextcomponent>
        </Ctawrapper>
      </div>
    </nav>
  );
};

export default Header;
