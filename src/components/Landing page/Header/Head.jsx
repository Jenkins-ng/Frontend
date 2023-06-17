import React, { useState } from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

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
      <div className="flex justify-between items-center  px-10 py-4 bg-white fixed shadow-2xl w-full z-10 ">
        <Logo />

        <Navlinks
          className={`${!navbar ? "grid" : "hidden"}
           absolute right-0 left-0 w-[100vw] pt-10 pb-10 place-items-center h-[80vh] bg-slate-200 top-[60px] md:relative md:top-0 md:pt-0 md:pb-0 md:h-0 md:justify-end md:flex"`}
        />

        <button onClick={NavbarHandler} className="md:hidden">
          <span className="material-symbols-outlined text-blue-400 text-3xl">
            {icon}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Head;
