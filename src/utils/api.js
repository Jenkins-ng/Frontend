import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.jenkins.ng/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
