import { useContext } from "react";
import { createContext, useState } from "react";

const Authcontext = createContext(null);

export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = (user) => {
    setUser(null);
  };

  return (
    <Authcontext.Provider value={{ user, login, logout }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(Authcontext);
};
