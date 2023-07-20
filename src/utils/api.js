import axios from 'axios'
const base_url = 'https://api.jenkins.ng/api/v1'

const api = axios.create({
  baseURL: base_url,
})

export const apiPrivate = axios.create({
  baseURL: base_url,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

export default api
