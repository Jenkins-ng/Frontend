import React from "react";
import { Outlet } from "react-router-dom";
import { Head } from "./Home/Section/Header";
import Foot from "./Home/Footer/Foot";
const Layout = () => {
  return (
    <main>
      <Head />
      <Outlet />
      <Foot />
    </main>
  );
};

export default Layout;
