import { createContext, useEffect, useState } from "react";
import { deleteCookie, getCookie } from "../utils/cookie";
import useApiPrivate from "../Hooks/useApiPrivate";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const apiPrivate = useApiPrivate();
  const [loading, setLoading] = useState(true);
  const [order, setorder] = useState();
  const [auth, setAuth] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const getUser = () => {
      try {
        const response = apiPrivate.post("/me");
        const data = response.data;
        setAuth({ ...data });
        setIsAuth(true);
      } catch (error) {
        if (error.status === 401) deleteCookie("token");
      } finally {
        setLoading(false);
      }
    };
    getCookie("token") ? getUser() : setLoading(false);
  }, []);

  useEffect(() => {
    Object.keys(auth).length === 0 ? setIsAuth(false) : setIsAuth(true);
  }, [auth]);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (Object.keys(auth).length !== 0) {
      setIsAuth(true);
    }
  }, [auth]);

  const logout = () => {
    setAuth({});
    setIsAuth(false);
    deleteCookie("token");
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isAuth, loading, logout, order, setorder }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
