import React from "react";
import { Outlet } from "react-router-dom";
import { Head } from "./Landing Page/Header";
import Foot from "./Landing Page/Foot";
import ScrollToTop from "../eventhive/ScrollToTop";
const Layout = () => {
  return (
    <main>
      <Head />
      <ScrollToTop />
      <main className="Hide">
        <Outlet />
      </main>
      <Foot />
    </main>
  );
};

export default Layout;
