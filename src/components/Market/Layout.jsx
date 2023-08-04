import React from "react";
import { Outlet } from "react-router-dom";
import { Head } from "./Home/Section/Header";
import Foot from "./Home/Footer/Foot";
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
