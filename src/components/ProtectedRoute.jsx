import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Preloader from "./eventhive/Preloader";

const ProtectedRoute = () => {
  const { isAuth, loading } = useAuth();

  return (
    <>
      {loading ? (
        <Preloader />
      ) : isAuth ? (
        <Outlet />
      ) : (
        <Navigate to="/signup" />
      )}
    </>
  );
};

export default ProtectedRoute;
