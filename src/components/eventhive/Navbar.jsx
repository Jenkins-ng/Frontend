import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { auth, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center w-10/12 mx-auto pt-[3%] pb-[2%] sticky">
      <Logo />
      <div>
        {!auth ? (
          <>
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
          </>
        ) : (
          <button
            className="bg-primary rounded-md text-white py-2 px-5 hover:bg-slate-50 hover:text-primary"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
