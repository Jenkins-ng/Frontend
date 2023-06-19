import React from "react";
import Logo from "../Landing page/Header/Logo";
import "./wrapper.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Events from "./Event/Events";

const Wrapper = (props) => {
  return (
    <div className="flex h-[100vh]">
      <nav className="w-[20%] bg-neutral-400 flex flex-col items-center content-center justify-evenly">
        <Logo />
        <ul>
          <NavLink to="/dashboard">
            <li>
              <span className="material-symbols-outlined">dashboard</span>{" "}
              Dashboard
            </li>
          </NavLink>
          <NavLink to="/admin/event">
            <li>
              <span className="material-symbols-outlined">event</span> Events
            </li>
          </NavLink>
          <NavLink to="/inbox">
            <li>
              <span className="material-symbols-outlined">mail</span> Messages
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li>
              <span className="material-symbols-outlined">person</span> Profile
            </li>
          </NavLink>
        </ul>
      </nav>
      <main className="w-[80%] px-4 overflow-hidden">{props.children}</main>
    </div>
  );
};

export default Wrapper;
