import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Required = () => {
  const { Auth } = useAuth();
  const location = useLocation();

  return Auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin"} state={{ from: location }} replace />
  );
};

export default Required;
