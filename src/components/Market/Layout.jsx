import React from "react";
import { Outlet } from "react-router-dom";
import { Head } from "./Home/Section/Header";
import Foot from "./Home/Footer/Foot";
import ScrollToTop from "../eventhive/ScrollToTop";

const Layout = () => {
  return (
    <main>
      <ScrollToTop />
      <Head />
      <Outlet />
      <Foot />
    </main>
  );
};

export default Layout;
