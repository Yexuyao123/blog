import { addClass, removeClass, eleMap } from "./util.js"

// eslint-disable-next-line no-unused-expressions
!(function () {
  // 监听滚轮时间，节流
  const view = eleMap.topNavBar
  const controller = {
    view: null,
    scrollState: false,
    timer: null,
    init: function (view, initState) {
      this.view = view
      this.scrollState = initState
      this.bindEvents()
    },
    bindEvents: function () {
      window.addEventListener(
        "scroll", () => {
          // 防抖
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            this.active()
          }, 100)

          // this.timer && clearTimeout(this.timer)
          // this.timer = setTimeout(this.active, 100)
        }
      )
    },
    deactive: function () {
      removeClass(this.view, "sticky")
      this.scrollState = false
    },
    active: function () {
      // 节流
      if (this.scrollState) return
      this.scrollState = true
      addClass(this.view, "sticky")
      setTimeout(() => {
        this.deactive()
      }, 3000)
    }
  }
  // eslint-disable-next-line no-useless-call
  controller.init.call(controller, view, false)
}.call())
