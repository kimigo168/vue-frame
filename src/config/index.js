
// import Vue from 'vue'
import global from './global'
import axios from './axios'
import asyAxios from './asyAxios'
let MyPlugin = {}
MyPlugin.install = (Vue, option) => {
  /**
   * 数组去重
   */
  Vue.prototype.$uniqueArr = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] || arr[i][key] === arr[j][key]) {
          arr.splice(j, 1)
          j--
        }
      }
    }
    return arr
  }

  Vue.prototype.$axios = axios
  Vue.prototype.$asyAxios = asyAxios

  /**
   * 绑定全局变量
   */
  Vue.prototype.$global = global

  // /**
  //  * 错误处理
  //  */
  // Vue.prototype.$errorPage = (res) => {
  //   if (res.code === '0') {
  //     return false
  //   } else {
  //     Message({ type: 'error', message: res.msg, showClose: true })
  //     return true
  //   }
  // }

  // 时间转换
  Date.prototype.format = function (formatStr) {
    var date = {
      year: this.getFullYear(),
      month: this.getMonth() + 1,
      date: this.getDate(),
      day: this.getDay(),
      hours: this.getHours(),
      minutes: this.getMinutes(),
      seconds: this.getSeconds(),
      time: this.getHours() >= 12 ? ['am', '\u4e0a\u5348'] : ['pm', '\u4e0b\u5348']
    }
    var reg = {
      year: /Y+/,
      date: /D+/,
      month: /M+/,
      day: /W/,
      hours: /h+/i,
      minutes: /m+/,
      seconds: /s+/,
      time: /t/i
    }
    var dateList = ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d']
    var k; var _p
    for (k in reg) {
      _p = reg[k]
      formatStr = formatStr.replace(_p, function (segment, index, originStr) {
        var l = segment.length
        var value = date[k]
        var str
        switch (k) {
          case 'day':
            str = dateList[value]
            break
          case 'hours':
            str = (segment.toLowerCase() === segment ? value % 12 : value).toString()
            break
          case 'time':
            str = segment.toLowerCase() === segment ? value[0] : value[1]
            break
        }
        if (k !== 'day' && k !== 'time') {
          if (l === 1) {
            str = value
          } else {
            str = ('000' + value).slice(-l)
          }
        }
        return str
      })
    }
    return formatStr
  }
}

export default MyPlugin
