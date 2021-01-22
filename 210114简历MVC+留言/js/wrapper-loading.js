import { addLabel, addClass, removeClass, eleMap } from "./util.js"
import { View } from "./base/view.js"
import { Controller1 } from "./base/controller.js"

// eslint-disable-next-line no-unused-expressions
!(function () {
  const view = View("#wrapper")
  const controller = Controller1({
    init: function (view) {
      this.active()
      this.time()
    },
    bindEvents: function () {
      // 用户关闭页面之前和刷新页面时触发
      window.onbeforeunload = function () {
        document.documentElement.scrollTop = 0 // ie下
        document.html.scrollTop = 0 // 非ie
      }
    },
    active: function () {
      this.view.appendChild(addLabel("div", {
        className: "circular-1 animation-1"
      }))
      this.view.appendChild(addLabel("div", {
        className: "circular-1 animation-2"
      }))
    },
    time: function () {
      const view = this.view
      setTimeout(function () {
        addClass(view, "display-none")
        removeClass(eleMap.body, "hidden")
      }, 3000)
    }
  })
  
  // eslint-disable-next-line no-useless-call
  controller.init.call(controller, view)
}.call())
