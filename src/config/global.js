
const BASEURL = '/api' // 打包

const API = {
  'getHotWord': BASEURL + '/ai/getHotWord.do' // 推荐热点
}
const phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/
const mailReg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

export default {
  API,
  BASEURL,
  phoneReg,
  mailReg
}
