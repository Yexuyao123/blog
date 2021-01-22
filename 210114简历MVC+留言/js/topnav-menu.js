import { addClass, removeClass } from "./util.js"
import { View } from "./base/view.js"
import { Controller1 } from "./base/controller.js"

// 作品博客下拉菜单
// eslint-disable-next-line no-unused-expressions
!(function () {
  const view = View(".menuTrigger",true) // trigger
  const controller = Controller1({
    bindEvents: function () {
      for (let i = 0; i < this.view.length; i++) {
        this.view[i].addEventListener("mouseenter", this.active)
        this.view[i].addEventListener("mouseleave", this.deactive)
      }
    },
    active: function (e) {
      const activeSon = this.getDom(e)
      removeClass(activeSon.brother, "hide")
      addClass(activeSon.brother, "show")
      removeClass(activeSon.brother, "display-none")
      addClass(activeSon.fly1, "display-none")
    },
    deactive: function (e) {
      const activeSon = this.getDom(e)
      removeClass(activeSon.brother, "show")
      addClass(activeSon.brother, "hide")
      setTimeout(function () {
        addClass(activeSon.brother, "display-none")
        removeClass(activeSon.fly1, "display-none")
      }, 4000)
    },
    getDom: function (e) {
      const li = e.currentTarget
      const brother = li.getElementsByTagName("ul")[0]
      const fly1 = li.getElementsByClassName("fly1")[0]
      return { brother, fly1 }
    }
  })
  
  // eslint-disable-next-line no-useless-call
  controller.init(view)
}.call())
