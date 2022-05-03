import axios from 'axios'

export default class ApiService {
  constructor () {
    this.api = axios.create({
      baseURL: `${this.getHostName()}`,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      }
    })
  }

  getHostName () {
    const { protocol, hostname } = window.location
    return `${protocol}//${hostname}:8080`
  }

  getEndpoint () {
    throw new Error('getEndpoint() is a abstract method, please implement it')
  }

  getResponseData ({ data }) {
    return data
  }

  async get (resource) {
    return this.getResponseData(await this.api.get(resource))
  }

  async findAll () {
    return await this.get(this.getEndpoint())
  }
}
