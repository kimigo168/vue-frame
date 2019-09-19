(function (doc, win) {
  function setPageSize () {
    if (window.innerWidth === 0) {
      setTimeout(function () {
        setPageSize()
      }, 200)
    } else {
      var winWidth = window.innerWidth
      var winHeight = window.innerHeight
      var fontWidth = (window.innerWidth * 20) / 1440
      var fontHeight = (window.innerHeight * 20) / 1080
      window.document.documentElement.style.width = winWidth + 'px'
      window.document.documentElement.style.height = winHeight + 'px'
      document.documentElement.style.fontSize = (fontWidth > fontHeight ? fontHeight : fontWidth).toFixed(2) + 'px'
    }
  }
  window.onload = () => {
    setPageSize()
  }
  window.onresize = () => {
    setPageSize()
  }
})(document, window)
