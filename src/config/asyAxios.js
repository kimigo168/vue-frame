import axios from 'axios'
const qs = require('qs')
const asyAxios = {
  async get (url, data) {
    try {
      let res = await axios.get(url, { params: data })
      console.log('res', res)
      return Promise((resolve, reject) => {
        if (res.code === '0') {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      console.log('err', err)
    }
  },
  async post (url, data) {
    try {
      let res = await axios.post(url, qs.stringify(data))
      console.log('res', res)
      return new Promise((resolve, reject) => {
        if (res.code === '0') {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      console.log('err', err)
    }
  }
}
export default asyAxios
