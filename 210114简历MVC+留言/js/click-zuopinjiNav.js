import { changeClass, show, hide } from "./util.js"
import { View } from "./base/view.js"
import { Controller1 } from "./base/controller.js"

// eslint-disable-next-line no-unused-expressions
!(function () {
  const view = View("#zuopinji")
  const controller = Controller1({
    component:{
      bar:null,
      tabs:null,
      jobs:null
    },
    init: function(view) {
      this.component.bar = view.querySelector("#portfolioBar")
      this.component.tabs = view.querySelector("nav>ol")
      this.component.jobs = view.querySelector(".jobs")
    },
    bindEvents: function(){
      /* Array.from 将类数组转化为数组 */
      const tabsChildren = Array.from(this.component.tabs.children)
      const jobsChildren = Array.from(this.component.jobs.children)
      if (tabsChildren.length !== jobsChildren.length) {
        throw Error("长度不一致")
      }
      const that = this
      function addTabEvent (tab, index) {
        // console.log(that) // 指向外部this
        tab.addEventListener("click", () => {
          changeClass(that.component.bar, `state-${index + 1}`) // "state-" + (index + 1) 反引号 `` 内支持运算，用${}包裹 // ['state',index+1].join('-')
          jobsChildren.forEach((el, j) => index !== j && hide(el))
          show(jobsChildren[index])
        })
      }
      tabsChildren.forEach(addTabEvent)
      // tabsChildren.forEach(name.bind(this))
    }
  })
  // eslint-disable-next-line no-useless-call
  controller.init(view)
}.call())
// 作品集导航栏点击监听，调整CSS的display样式
