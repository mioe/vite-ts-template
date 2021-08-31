import axios from 'axios'

// axios.defaults.withCredentials = true // enable cookies

if (import.meta.env.NODE_ENV === 'development') {
  console.log('🦕 VITE ENV', import.meta.env)
}

export default axios.create({
  headers: {
    Accept: 'application/json',
  },
})
