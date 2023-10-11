import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import useAuth from "../Hooks/useAuth";
import notifyError from "../utils/notifyError";

const AdminRoute = () => {
  const { auth } = useAuth();

  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem("returnTo", history);
  }, [history]);

  if (!auth.is_admin) {
    notifyError("unauthorised Access Route");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
