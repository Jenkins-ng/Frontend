import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../Wrapper";

const Layout = () => {
  return (
    <main>
      <Wrapper />
      <Outlet />
    </main>
  );
};

export default Layout;
