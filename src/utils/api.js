import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.jenkins.ng/api/v1',
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
})

export default api
