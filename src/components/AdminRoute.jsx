import { Navigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const AdminRoute = ({ children }) => {
  const { auth } = useAuth()
  console.log(auth)
  if (!auth?.is_admin) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}

export default AdminRoute
