import { Outlet, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import Preloader from './eventhive/Preloader'

const ProtectedRoute = () => {
  const { isAuth, loading } = useAuth()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  return (
    <>
      {loading ? (
        <Preloader />
      ) : isAuth ? (
        <Outlet />
      ) : (
        <Navigate to="/signup" state={{ from: location }} replace />
      )}
    </>
  )
}

export default ProtectedRoute
