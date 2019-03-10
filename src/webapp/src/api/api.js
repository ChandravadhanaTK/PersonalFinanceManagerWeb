import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://localhost:8443/v1',
  // baseURL: 'https://pfm-api.cfapps.io/v1',
  /* other custom settings */
})

export default axiosInstance