import api, { apiPrivate } from '../utils/api'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()
  const refresh = async () => {
    const response = await api.post('/refresh', {
      withCredentials: true,
    })

    setAuth((prev) => {
      console.log(response)
      // return {
      //   ...prev,
      //   roles: response.data.roles,
      //   token: response.data.authorisation.token,
      // }
    })
    return response.data.authorisation.token
  }
  return refresh
}

export default useRefreshToken
