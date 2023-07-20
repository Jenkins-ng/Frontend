import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)

  const logout = () => {
    setAuth(null)
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
