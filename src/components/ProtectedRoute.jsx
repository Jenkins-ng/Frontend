import { Outlet, Navigate, useNavigate, useNavigation } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import Preloader from "./eventhive/Preloader";

const ProtectedRoute = () => {
  const { isAuth, loading } = useAuth();
  const history = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("returnTo", history);
  }, [history]);

  return (
    <>{loading ? <Preloader /> : isAuth ? <Outlet /> : navigate("/signup")}</>
  );
};

export default ProtectedRoute;
