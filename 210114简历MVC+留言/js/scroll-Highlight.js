import { addClass, removeClass, eleMap } from "./util.js"
import { View } from "./base/view.js"
import { Controller1 } from "./base/controller.js"

// eslint-disable-next-line no-unused-expressions
!(function () {
  // 滚动划入+对应高亮
  const view = View(".ba",true)
  const controller = Controller1({
    status:{
      hightLight:null
    },
    init: function (view) {
      this.hightLight = ""
    },
    bindEvents: function () {
      window.addEventListener("scroll", () => {
        this.highLightEvent()
        this.slideUpEvent()
        this.flyActive(this.hightLight)
      })
    },
    slideUpActive: function (current) {
      addClass(eleMap[current], "slideUp")
      setTimeout(removeClass(eleMap[current], "margin-top100"), 5000)
    },
    flyActive: function (current) {
      for (let i = 0; i < this.view.length; i++) {
        if (this.view[i].nextElementSibling) {
          removeClass(this.view[i].nextElementSibling, "fly-active")
        }
        if (this.view[i].getAttribute("href") === current) {
          const hightLightEle = this.view[i].nextElementSibling
          addClass(hightLightEle, "fly-active")
        }
      }
    },
    highLightEvent: function () {
      if (window.scrollY > 100 && window.scrollY < 400) {
        this.hightLight = "#userCard"
      } else if (window.scrollY > 400 && window.scrollY < 1100) {
        this.hightLight = "#skill"
      } else if (window.scrollY > 1100 && window.scrollY < 1500) {
        this.hightLight = "#zuopinji"
      } else if (window.scrollY > 1500) {
        this.hightLight = "#zuopinzhanshi"
      }
    },
    slideUpEvent: function () {
      if (window.scrollY > 400 && window.scrollY < 1100) {
        this.slideUpActive("skill")
      } else if (window.scrollY > 1100 && window.scrollY < 1500) {
        this.slideUpActive("zuopinji")
      } else if (window.scrollY > 1500 && window.scrollY < 2350) {
        this.slideUpActive("zuopinzhanshi")
      } else if (window.scrollY > 2350) {
        this.slideUpActive("messages")
      }
    }
  })

  // eslint-disable-next-line no-useless-call
  controller.init.call(controller, view)
}.call())
