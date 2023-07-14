import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-11/12 mx-auto pt-[3%] pb-[2%] sticky">
      <Logo />
      <div>
        <Link
          className="py-4 px-10 hover:text-primary duration-300"
          to="/signin"
        >
          Login
        </Link>
        <Link
          className="bg-primary rounded-md text-white py-2 px-5 hover:bg-white hover:text-primary"
          to="/signup"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
