import { Navigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import notifyError from '../utils/notifyError'

const AdminRoute = ({ children }) => {
  const { auth, loading } = useAuth()

  if (!auth?.is_admin) {
    notifyError('unauthorised Access Route')
    return <Navigate to="/" />
  }

  return <>{children}</>
}

export default AdminRoute
