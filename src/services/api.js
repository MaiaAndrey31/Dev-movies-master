import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '1d2ea5e111d648efa4194fc8de2d54c4',
    language: 'pt-BR',
    page: 1
  }
})

export default api
