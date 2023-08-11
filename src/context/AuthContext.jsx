import { createContext, useEffect, useState } from 'react'
import { deleteCookie, getCookie } from '../utils/cookie'
import useApiPrivate from '../Hooks/useApiPrivate'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const apiPrivate = useApiPrivate()
  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState({})
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await apiPrivate.post('/me')
        const data = response.data
        setAuth({ ...data })
      } catch (error) {
        if (error.status === 401) deleteCookie('token')
      } finally {
        setLoading(false)
      }
    }
    getCookie('token') ? getUser() : setLoading(false)
  }, [])

  useEffect(() => {
    Object.keys(auth).length ? setIsAuth(true) : setIsAuth(false)
  }, [auth])

  const logout = () => {
    setAuth({})
    setIsAuth(false)
    deleteCookie('token')
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, isAuth, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
