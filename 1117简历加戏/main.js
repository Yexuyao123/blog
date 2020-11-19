"use strict"
// const getElement = require("./util").getElement
// const addLabel = require("./util").addLabel
import { getElement, addLabel, addClass, removeClass, changeClass } from "./util/util.js"

const getEls = ["portfolio1", "portfolio2", "portfolio3", "portfolioBar", "picturejobs1", "picturejobs2", "picturejobs3", "zuopinji", "wrapper", "topNavBar", "body"]
const eleMap = {}
getEls.forEach(id => {
  eleMap[id] = getElement(id)
})
// console.log(eleMap)
// Object.keys(eleMap).forEach(key => {
//   const value = eleMap[key]
//   console.log(key, value)
// })
// function x(id) {
//   eleMap[id] = getElement(id)
// }
// id => getElement(id) 箭头右边没有{}代表直接return

// const queuingGetEle = ["portfolio1", "portfolio2", "portfolio3", "portfolioBar", "picturejobs1", "picturejobs2", "picturejobs3", "zuopinji"]
// queuingGetEle.forEach(function (id, index) {
//   var value = queuingGetEle[key]
// })

// 作品集导航栏点击监听，调整CSS的display样式
function cssDisplay (ele, value) {
  ele.style.display = value
}
eleMap.portfolio1.onclick = function () {
  changeClass(eleMap.portfolioBar, "state-1")
  cssDisplay(eleMap.picturejobs2, "none")
  cssDisplay(eleMap.picturejobs3, "none")
  cssDisplay(eleMap.picturejobs1, "block")
  // eleMap.zuopinji.style.height = "728px"
}
eleMap.portfolio2.onclick = function () {
  changeClass(eleMap.portfolioBar, "state-2")
  cssDisplay(eleMap.picturejobs1, "none")
  cssDisplay(eleMap.picturejobs3, "none")
  cssDisplay(eleMap.picturejobs2, "block")
  // eleMap.zuopinji.style.height = "728px"
}
eleMap.portfolio3.onclick = function () {
  changeClass(eleMap.portfolioBar, "state-3")
  cssDisplay(eleMap.picturejobs1, "none")
  cssDisplay(eleMap.picturejobs2, "none")
  cssDisplay(eleMap.picturejobs3, "block")
  // eleMap.zuopinji.style.height = "500px"
}

// loading
const circular1 = addLabel("div", {
  className: "circular-1 animation-1"
})
const circular2 = addLabel("div", {
  className: "circular-1 animation-2"
}) // circular2可以用伪类来实现
eleMap.wrapper.appendChild(circular1)
eleMap.wrapper.appendChild(circular2)

// 人为设置加载loading
setTimeout(function () {
  addClass(eleMap.wrapper, "display-none")
  removeClass(eleMap.body, "hidden")
}, 3000)
// 用户关闭页面之前和刷新页面时触发
// window.onbeforeunload = function (e) {
//   console.log(e)
//   document.documentElement.scrollTop = 0 // ie下
//   document.html.scrollTop = 0 // 非ie
// }

// 滚动监听，导航栏变化
//! const compareDeltaY = { now: 0, later: 1, laterY: null }
//! window.onwheel = function (e) {
//!   console.log("e.deltaY:" + e.deltaY)
//!   compareDeltaY.now = e.deltaY
//!   compareDeltaY.later = compareDeltaY.laterY
//!   console.log(compareDeltaY)
// console.log(window.scrollY)
// 纵向滚动距离（起点到终点的竖向距离）
// console.log(e)
// if (window.scrollY > 0) {
//   addClass(eleMap.topNavBar, "sticky")
// } else {
//   removeClass(eleMap.topNavBar, "sticky")
// }
//!   clearTimeout(compareDeltaY.timer)
//!   setTimeout(compareDelta(), 1000, compareDeltaY.later)
// if (e.deltaY !== 0) {
//   addClass(eleMap.topNavBar, "sticky")
// }
//! }
//! function compareDelta (later) {
//!   if (compareDeltaY.now === later) {
//!     removeClass(eleMap.topNavBar, "sticky")
//!     console.log("鼠标不滚了")
//!     compareDeltaY.now = 0
//!     compareDeltaY.later = 1
//!   } else {
//!     addClass(eleMap.topNavBar, "sticky")
//!     compareDeltaY.laterY = compareDeltaY.now
//!   }
//! }

// function stopWheel () {
//   if (ifWheel === false) {
//     removeClass(eleMap.topNavBar, "sticky")
//     console.log("鼠标不滚了")
//   }
// }

// 有问题。。
// const compareDeltaY = { now: 0, before: 1, beforeY: null }
// window.onscroll = function (e) {
//   console.log(e)
//   console.log("window.scrollY:" + window.scrollY)
//   compareDeltaY.now = window.scrollY
//   compareDeltaY.before = compareDeltaY.beforeY
//   console.log(compareDeltaY)
//   clearTimeout(compareDeltaY.timer)
//   setTimeout(compareDelta, 0, compareDeltaY.before)
// }
// function compareDelta (before) {
//   if (compareDeltaY.now === before) {
//     removeClass(eleMap.topNavBar, "sticky")
//     console.log("鼠标不滚了")
//     compareDeltaY.now = 0
//     compareDeltaY.before = 1
//     compareDeltaY.beforeY = null
//   } else {
//     addClass(eleMap.topNavBar, "sticky")
//     compareDeltaY.beforeY = compareDeltaY.now
//   }
// }

//  有用，待理解
// let t1 = 0
// let t2 = 0
// // const timer = null // 定时器
// // scroll监听
// document.onscroll = function () {
//   // clearTimeout(timer)
//   // timer = setTimeout(isScrollEnd, 1000)
//   setTimeout(isScrollEnd, 1000)
//   t1 = document.documentElement.scrollTop || document.body.scrollTop
// }
// function isScrollEnd () {
//   t2 = document.documentElement.scrollTop || document.body.scrollTop
//   if (t2 === t1) {
//     console.log("滚动结束了")
//   }
// }

// 监听滚轮时间，节流
let ifScroll = false
window.onscroll = function (e) {
  if (!ifScroll) { ifScroll = true }
  if (ifScroll) {
    addClass(eleMap.topNavBar, "sticky")
    setTimeout(compareDelta, 3000)
  }
}
function compareDelta () {
  removeClass(eleMap.topNavBar, "sticky")
  ifScroll = false
}
