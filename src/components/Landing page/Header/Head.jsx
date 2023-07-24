import React, { useState } from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";

const Head = () => {
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
    <div>
      <div className="flex justify-between items-center px-10 py-[11px] sm:py-4 lg:py-2 bg-white fixed shadow-2xl w-full z-10 ">
        <Link to="/">
          <Logo />
        </Link>

        <Navlinks
          className={`${!navbar ? "grid" : "hidden"}
           absolute right-0 left-0 w-[100vw] pt-10 pb-10 place-items-center h-[80vh] bg-slate-200 top-[60px] lg:relative lg:top-0 lg:pt-0 lg:pb-0 lg:h-0 lg:justify-end lg:flex"`}
        />

        <button onClick={NavbarHandler} className="lg:hidden">
          <span className="material-symbols-outlined text-blue-400 text-3xl">
            {icon}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Head;
