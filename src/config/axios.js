import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = ''
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 15000

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  let data = response.data
  if (data.code === '1') {
    Vue.prototype.$message({ type: 'error', message: data.msg, showClose: true })
  } else if (data.code === '9001') {
    // location.href = location.pathname
    // store.commit(CLEAR_USERINFO) // 清除登录过期的用户信息
    // setTimeout(() => {
    //   store.commit(TOGGLE_LOGINPOP, true) // 弹出登录弹窗
    // }, 300)
  }
  return response.data
}, (error) => {
  // Vue.prototype.$message({ type: 'error', message: '请求失败，请稍后再试..', showClose: true })
  return Promise.reject(error)
})

export default axios
