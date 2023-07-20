import React, { useEffect, useState } from "react";
import Logo from "../Landing page/Header/Logo";
import "./wrapper.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Events from "./Event/Events";

const Wrapper = (props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);
  const Reveal = () => {
    setShow((prev) => !show);
  };

  return (
    <div className="flex h-[100vh]">
      <nav className="w-[20%] bg-neutral-400 flex flex-col items-center content-center justify-evenly">
        <Logo />
        <ul>
          <li>
            <Link to="/dashboard" className="flex items-center gap-5">
              <span className="material-symbols-outlined flex">dashboard</span>{" "}
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/admin/event" className="flex items-center gap-5">
              <span className="material-symbols-outlined">event</span>
              <p>Events</p>
            </Link>
          </li>
          <li onClick={Reveal} className="flex items-center gap-5">
            <span className="material-symbols-outlined">storefront</span>
            <p>E-Commerce</p>
          </li>
          <ul className={`${show ? "block" : "hidden"} grid justify-end`}>
            <li>
              <Link to="/admin/ecommerce/overview" className="flex items-center gap-5">
                <span className="material-symbols-outlined">overview</span>
                <p>Overview</p>
              </Link>
            </li>
            <li>
              <Link to="/admin/ecommerce/product" className="flex items-center gap-5">
                <span className="material-symbols-outlined">inventory</span>
                <p>Products</p>
              </Link>
            </li>
            <li>
              <Link to="/admin/ecommerce/orders" className="flex items-center gap-5">
                <span className="material-symbols-outlined">event</span>
                <p>Orders</p>
              </Link>
            </li>
          </ul>
          <li>
            <Link to="/admin/inbox" className="flex items-center gap-5">
              <span className="material-symbols-outlined">mail</span>
              <p>Messages</p>
            </Link>
          </li>
          <li>
            <Link to="/admin/profile" className="flex items-center gap-5">
              <span className="material-symbols-outlined">person</span>
              <p>Profile</p>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="w-[80%] px-4 overflow-hidden wrapper">
        {props.children}
      </main>
    </div>
  );
};

export default Wrapper;
