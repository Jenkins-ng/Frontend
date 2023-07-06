import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-10/12 mx-auto pt-[3%] pb-[2%]">
      <Logo />
      <div>
        <Link
          className="py-4 px-10 hover:text-primary duration-300"
          to="/eventthive/login"
        >
          Login
        </Link>
        <Link
          className="bg-primary rounded-md text-white py-4 px-10"
          to="/eventhive/signup"
        >
          Signup
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
