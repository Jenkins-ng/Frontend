import React, { useContext, useState } from "react";
import Ctawrapper from "../../Landing page/CTA/Ctawrapper";
import CTAtextcomponent from "../../Landing page/CTA/CTAtextcomponent";
import Logo from "../../Landing page/Header/Logo";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import Signupbutton from "../../Buttons/Signupbutton";
import { AuthContext } from "../../../context/AuthContext";

export const Head = () => {
  const { isAuth, auth, logout } = useAuth();
  const [icon, seticon] = useState("Menu");
  const [navbar, setNavbar] = useState(true);
  const NavbarHandler = () => {
    setNavbar((prevstate) => !navbar);
    if (navbar) {
      seticon("close");
    } else seticon("menu");
    // seticon((prevstate) => !"Home" || "close");
  };

  return (
    <header className="grid grid-flow-col justify-between items-center content-center px-3 sm:px-9 py-[4px] sm:py-4 shadow-md fixed Hide bg-white z-10 w-full">
      <div className="flex sm:gap-20 gap-4 items-center">
        <Link to="/">
          <Logo />
        </Link>
        <ul>
          <li className="text-slate-500 font-bold text-lg sm:text-xl tracking-tighter sm:tracking-wide ">
            <Link to="/jobs">FIND JOBS</Link>
          </li>
        </ul>
      </div>
      <div
        className={`${!navbar ? "grid" : "hidden"}
           absolute right-0 left-0 w-[50vh] sm:grid pt-10 pb-10 z-10 place-items-center place-content-center  h-[60vh] bg-slate-200 top-[45px] sm:relative sm:top-0 sm:pt-0 sm:pb-0 sm:h-0 lg:justify-end lg:flex"`}
      >
        {!isAuth ? (
          <div className="sm:flex grid gap-2 sm:gap-5">
            <>
              <Link to="signup">
                <button
                  type="submit"
                  className="sm:px-5 sm:py-1 px-5 py-[4px] text-slate-500 bg-blue-400 font-bold rounded-lg"
                >
                  SIGNUP
                </button>
              </Link>
              <Link to="/signin">
                <button
                  type="submit"
                  className="sm:px-5 sm:py-1 px-5 py-[4px] text-slate-500 bg-blue-400 font-bold rounded-lg"
                >
                  LOGIN
                </button>
              </Link>
            </>
          </div>
        ) : (
          <div className="grid sm:flex gap-2">
            <p className="flex gap-2">
              Welcome, <span>{auth.name}</span>
            </p>
            <button
              type="submit"
              onClick={logout}
              className="sm:px-5 sm:py-1 px-5 py-[4px] text-slate-500 bg-blue-400 font-bold rounded-lg"
            >
              LOGOUT
            </button>
          </div>
        )}
      </div>
      <button onClick={NavbarHandler} className="sm:hidden">
        <span className="material-symbols-outlined text-blue-400 text-3xl">
          {icon}
        </span>
      </button>
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
