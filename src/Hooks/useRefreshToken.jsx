import api from '../utils/api'

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await api.get('/refresh', {
      withCredentials: true,
    })
    return response.data.authorisation.token
  }
  return refresh
}

export default useRefreshToken
