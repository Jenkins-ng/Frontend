import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import Preloader from "./eventhive/Preloader";

const ProtectedRoute = () => {
  const { isAuth, loading } = useAuth();
  const location = useLocation();
  const history = window.location.pathname;

  useEffect(() => {
    sessionStorage.setItem("returnTo", history);
  }, [history]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : isAuth ? (
        <Outlet />
      ) : (
        <Navigate to="/signin" state={{ from: location }} replace />
      )}
    </>
  );
};

export default ProtectedRoute;
