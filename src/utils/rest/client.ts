import axios from 'axios'
import keys from 'constants/LocalKeys'
import cookie from 'js-cookie'

const envs = {
  dev: {
    baseURL: 'http://localhost:8002',
  },
  qa: {
    baseURL: 'https://qa-api-nft.famcentral.finance',
  },
  prod: {
    baseURL: 'https://api-nft.famcentral.finance',
  },
}
const { REACT_APP_ENV = 'dev' } = process.env
const { baseURL } = envs[REACT_APP_ENV]

// Set config defaults when creating the instance
const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor
client.interceptors.request.use((config) => {
  // Do something before request is sent
  // const token = cookie.get(keys.TOKEN)
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }
  return config
})

// Add a response interceptor
client.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const data = get(error, "response.data");
    // if (data) {
    //   message.error(data.message);
    // } else {
    //   error = get(error, "response.data");
    // }

    return Promise.reject(error)
  },
)

export const http = client
