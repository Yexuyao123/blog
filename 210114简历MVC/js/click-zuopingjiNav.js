import { changeClass, show, hide } from "./util.js"

// eslint-disable-next-line no-unused-expressions
!(function () {
  const view = document.querySelector("#zuopinji")
  const controller = {
    view: null,
    init (view) {
      const bar = view.querySelector("#portfolioBar")
      const tabs = view.querySelector("nav>ol")
      const jobs = view.querySelector(".jobs")
      this.view = { bar, jobs, tabs }
      this.bindEvents()
    },
    bindEvents () {
      /* Array.from 将类数组转化为数组 */
      const tabsChildren = Array.from(this.view.tabs.children)
      const jobsChildren = Array.from(this.view.jobs.children)
      if (tabsChildren.length !== jobsChildren.length) {
        throw Error("长度不一致")
      }
      const that = this
      function addTabEvent (tab, index) {
        console.log(that) // 指向外部this
        tab.addEventListener("click", () => {
          changeClass(this.view.bar, `state-${index + 1}`) // "state-" + (index + 1) 反引号 `` 内支持运算，用${}包裹 // ['state',index+1].join('-')
          jobsChildren.forEach((el, j) => index !== j && hide(el))
          show(jobsChildren[index])
        })
      }
      tabsChildren.forEach(addTabEvent)
      // tabsChildren.forEach(name.bind(this))
    }
  }
  // eslint-disable-next-line no-useless-call
  controller.init.call(controller, view)
}.call())
// 作品集导航栏点击监听，调整CSS的display样式
