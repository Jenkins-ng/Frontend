import api from '../utils/api'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await api.get('/refresh', {
      withCredentials: true,
    })
    setAuth((prev) => {
      console.log(JSON.stringify(prev))
      console.log(response.data)
      // return {...prev, access}
    })
    return response.data.authorisation.token
  }
  return refresh
}

export default useRefreshToken
