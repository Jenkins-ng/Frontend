import { createContext, useEffect, useState } from 'react'
import { deleteCookie, getCookie } from '../utils/cookie'
import useApiPrivate from '../Hooks/useApiPrivate'
import Preloader from '../components/eventhive/Preloader'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const apiPrivate = useApiPrivate()
  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await apiPrivate.post('/me')
        const data = response.data
        setAuth({ ...data })
      } catch (error) {
        if (error.response?.status === 401) {
          setAuth(null)
        }
      } finally {
        setLoading(false)
      }
    }
    getCookie('token') ? getUser() : setLoading(false)
  }, [])

  const logout = () => {
    deleteCookie('token')
    setAuth(null)
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {loading ? <Preloader /> : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
