import React from "react";
import Header from "../Landing page/Header/Head";
import Foot from "../Landing page/Footer/foot";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../eventhive/ScrollToTop";

const Layout = () => {
  return (
    <main className="relative">
      <Header />
      <ScrollToTop />
      <Outlet />
      <Foot />
    </main>
  );
};

export default Layout;
