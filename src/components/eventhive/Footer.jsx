import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogoLight,
} from "react-icons/pi";

const links = [
  {
    text: "Home",
    url: "/eventhive",
  },
  {
    text: "About",
    url: "",
  },
  {
    text: "Services",
    url: "",
  },
  {
    text: "Get in touch",
    url: "",
  },
  {
    text: "FAQs",
    url: "",
  },
];

const email_regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);

  const emailRef = useRef(null);

  // reset invalid when email changes
  useEffect(() => {
    setInvalid(false);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate email
    if (!email_regex.test(email)) {
      setInvalid(true);
    } else {
      emailRef.current.value = "";
    }
  };

  return (
    <footer className="eventhive bg-backgroundGrey pt-[3%] pb-[2%] px-[3%] text-center text-white">
      <Logo color="text-white" />
      <form
        onSubmit={handleSubmit}
        className="pt-5 pb-8 flex justify-center gap-3"
      >
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your mail"
          className={`py-[4px] px-5 rounded-md w-72 border-4 border-solid ${
            invalid ? "text-red-500 border-red-500" : "text-black border-white"
          }`}
          ref={emailRef}
        />
        <button className="bg-primary rounded-md text-white py-[4px] px-10">
          Subscribe
        </button>
      </form>
      <div className="flex justify-center gap-5 text-slate-500">
        {links.map(({ text, url }, i) => {
          return (
            <Link key={i} to={url}>
              {text}
            </Link>
          );
        })}
      </div>
      <div className="w-full h-[1px] bg-white mt-8 mb-7"></div>
      <div className="flex justify-between items-center  text-slate-500">
        <div className="flex gap-4 items-center">
          <button className="px-3 py-1 bg-primary rounded-md hover:text-white">
            English
          </button>
          <button className="px-3 py-1 duration-500 hover:bg-primary rounded-md hover:text-white">
            French
          </button>
          <button className="px-3 py-1 duration-500 hover:bg-primary rounded-md hover:text-white">
            Hindi
          </button>
        </div>
        <div className="flex gap-4 ml-[5%]">
          <a href="#">
            <PiLinkedinLogoLight size={30} />
          </a>
          <a href="#">
            <PiInstagramLogo size={30} />
          </a>
          <a href="#">
            <PiFacebookLogo size={30} />
          </a>
        </div>
        <div className="mb-4 md:mb-0 text-base text-right  text-slate-500 ">
          <p className="flex items-center gap-1">
            Jenkins Development And Substantial Services Limited.
            <span className="material-symbols-outlined text-lg">copyright</span>
            2023.
          </p>
          <p>All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;