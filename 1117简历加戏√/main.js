"use strict"
// const getElement = require("./util").getElement
// const addLabel = require("./util").addLabel
import { getElement, addLabel, addClass, removeClass, changeClass, getTagName } from "./util/util.js"

const getEls = ["portfolio1", "portfolio2", "portfolio3", "portfolioBar", "picturejobs1", "picturejobs2", "picturejobs3", "zuopinji", "wrapper", "topNavBar", "body", "backToTop", "userCard", "skill"]
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
window.onbeforeunload = function (e) {
  console.log(e)
  document.documentElement.scrollTop = 0 // ie下
  document.html.scrollTop = 0 // 非ie
}

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

// 作品博客下拉菜单
const liTags = document.getElementsByClassName("menuTigger")
// 找到ul节点
// for (let i = 0; i < liTags.length; i++) {
//   liTags[i].onmouseenter = function (e) {
//     const li = e.currentTarget
//     const brother = li.getElementsByTagName("ul")[0]
//     removeClass(brother, "display-none")
//   }
//   liTags[i].onmouseleave = function (e) {
//     const li = e.currentTarget
//     const brother = li.getElementsByTagName("ul")[0]
//     addClass(brother, "display-none")
//   }
// }
for (let i = 0; i < liTags.length; i++) {
  // 鼠标进入
  liTags[i].onmouseenter = function (e) {
    const li = e.currentTarget
    const brother = li.getElementsByTagName("ul")[0]
    const fly1 = li.getElementsByClassName("fly1")[0]
    removeClass(brother, "hide")
    addClass(brother, "show")
    removeClass(brother, "display-none")
    addClass(fly1, "display-none")
  }
  // 鼠标离开
  liTags[i].onmouseleave = function (e) {
    const li = e.currentTarget
    const brother = li.getElementsByTagName("ul")[0]
    const fly1 = li.getElementsByClassName("fly1")[0]
    removeClass(brother, "show")
    addClass(brother, "hide")
    setTimeout(function () {
      addClass(brother, "display-none")
      removeClass(fly1, "display-none")
    }, 4000)
  }
}

// 监听滚轮时间，节流
let ifScroll = false
function compareDelta () {
  removeClass(eleMap.topNavBar, "sticky")
  ifScroll = false
}
function topNavBarSticky () {
  if (!ifScroll) { ifScroll = true }
  if (ifScroll) {
    addClass(eleMap.topNavBar, "sticky")
    setTimeout(compareDelta, 3000)
  }
}
// 滚动划入+对应高亮
const baTags = document.getElementsByClassName("ba")
let hightLight = ""
window.onscroll = function (e) {
  topNavBarSticky()
  if (window.scrollY > 100 && window.scrollY < 400) {
    hightLight = "#userCard"
  } else if (window.scrollY > 400 && window.scrollY < 1100) {
    hightLight = "#skill"
    addClass(eleMap.skill, "slideUp")
    setTimeout(removeClass(eleMap.skill, "margin-top100"), 5000)
  } else if (window.scrollY > 1100) {
    hightLight = "#zuopinji"
    addClass(eleMap.zuopinji, "slideUp")
    setTimeout(removeClass(eleMap.zuopinji, "margin-top100"), 5000)
  }
  for (let i = 0; i < baTags.length; i++) {
    // console.log(baTags[i].nextElementSibling.classList)
    if (baTags[i].nextElementSibling) {
      removeClass(baTags[i].nextElementSibling, "fly-active")
    }
    if (baTags[i].getAttribute("href") === hightLight) {
      const hightLightEle = baTags[i].nextElementSibling
      addClass(hightLightEle, "fly-active")
    }
  }
}

// 鼠标点击跳转 模拟动画
for (let i = 0; i < baTags.length; i++) {
  baTags[i].onclick = function (e) {
    e.preventDefault()
    const li = e.currentTarget
    const href = li.getAttribute("href")
    const elePosition = document.querySelector(href).getBoundingClientRect()
    const topY = elePosition.top
    const currentY = window.scrollY
    console.log(topY + currentY)
    window.scrollTo(0, topY + currentY - 100)
  }
}

// 声明时间曲线
function animate (time) {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}
requestAnimationFrame(animate)
eleMap.backToTop.onclick = function (e) {
  e.preventDefault()
  const coords = { y: window.scrollY }
  const tween = new TWEEN.Tween(coords)
    .to({ y: 0 }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(() => {
      window.scrollTo(0, coords.y)
    })
    .start()
}
