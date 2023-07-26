import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const AdminRoute = ({ children }) => {
  const { auth } = useAuth()

  if (!auth.is_admin) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}

export default AdminRoute
