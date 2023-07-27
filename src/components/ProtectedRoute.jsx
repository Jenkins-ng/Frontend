import { Navigate, Outlet } from "react-router-dom";
import notifyError from "../utils/notifyError";
import notifySuccess from "../utils/notifySuccess";
import useAuth from "../Hooks/useAuth";

const ProtectedRoute = () => {
  const { auth } = useAuth();

  if (!auth) {
    notifyError("Kindly Sign Up");
    return <Navigate to="/" />;
  }
  notifySuccess("WELCOME BACK!");
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
