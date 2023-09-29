import React from "react";
import { Outlet } from "react-router-dom";
import { Head } from "./Landing Page/Header";
import Foot from "./Landing Page/Foot";

const Layout = () => {
  return (
    <main>
      <Head />
      <main className="Hide">
        <Outlet />
      </main>
      <Foot />
    </main>
  );
};

export default Layout;
