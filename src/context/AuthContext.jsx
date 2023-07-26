import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(JSON.parse(sessionStorage.getItem('auth')))

  useEffect(() => {
    const authData = JSON.parse(sessionStorage.getItem('auth'))
    setAuth(authData)
  }, [])

  const logout = () => {
    setAuth(null)
    sessionStorage.clear('auth')
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
