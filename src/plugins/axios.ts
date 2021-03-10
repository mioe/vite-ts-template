import axios from 'axios'

// axios.defaults.withCredentials = true // enable cookies

if (import.meta.env.NODE_ENV === 'development') {
  console.log('🐹 VITE_APP_FAKE_API_URL', import.meta.env.VITE_APP_FAKE_API_URL)
}


export const fakeApi = axios.create({
  baseURL: `${import.meta.env.VITE_APP_FAKE_API_URL}`,
  headers: {
    Accept: 'application/json',
  },
})
