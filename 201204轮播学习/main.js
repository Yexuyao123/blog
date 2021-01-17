"use strict"
// const getElement = require("./util").getElement
// const addLabel = require("./util").addLabel
import { getElement, addLabel, addClass, removeClass, changeClass, getTagName } from "./util/util.js"

const getEls = ["portfolio1", "portfolio2", "portfolio3", "portfolioBar", "picturejobs1", "picturejobs2", "picturejobs3", "zuopinji", "wrapper", "topNavBar", "body", "backToTop", "userCard", "skill"]
const eleMap = {}
getEls.forEach(id => {
  eleMap[id] = getElement(id)
})

// jQuery
// $(point5).on("click", function () {
//   $(carousel).css({
//     transform: "translateX(-600px)"
//   })
// })

let $currentPicture = $($("#carousel > .zhuanji-p")[1].children)
// console.log($("#carousel").children().find("#picture10"))
// console.log($("#carousel").children().filter("#picture10"))
// console.log($("#carousel > .zhuanji-p"))
// console.log($("#carousel > .zhuanji-p")[0])
// console.log($currentPicture)
let times = 0
const pointEle = {
  picture1: $(point1),
  picture2: $(point2),
  picture3: $(point3),
  picture4: $(point4),
  picture5: $(point5),
  picture6: $(point6),
  picture7: $(point7),
  picture8: $(point8),
  picture9: $(point9),
  picture10: $(point10),
  picture11: $(point11)
}
let currentMax = pointEle.picture2
const $points = $(".point-center > li")
$points.on("click", function (e) {
  currentMax.removeClass("point-active")
  currentMax = $(e.currentTarget)
  let currentIndex = -1
  for (const key in pointEle) {
    currentIndex++
    // console.log(key)
    // console.log(pointEle[key])
    // console.log(pointEle[key][0])
    // console.log(currentMax)
    // console.log($(currentMax[0]))
    // console.log($(currentMax[0])[0].id)
    if (pointEle[key][0] === currentMax[0]) {
      // console.log(currentIndex)
      times = currentIndex
      $(carousel).css({
        transform: "translateX(" + (-600 * currentIndex) + "px)"
      })
      // console.log(key)
      // console.log($currentPicture)
      // console.log($("#carousel > .zhuanji-p"))
      $currentPicture.removeClass("img-active")
      $currentPicture = $("#carousel").children().filter("#" + key).children()
      // console.log($("#carousel").children().filter("#" + key))
      // console.log($currentPicture)
      setTimeout(function () { $currentPicture.addClass("img-active") }, 100)
      // console.log($currentPicture)
    }
  }
  currentMax.addClass("point-active")
})

// 自动轮播，鼠标进入暂停
const run = () => {
  times += 1
  $points.eq(times % $points.length).trigger("click")
}
let countTime = setInterval(run, 3000)
$("#zuopinji").on("mouseenter", function () {
  clearInterval(countTime)
})
$("#zuopinji").on("mouseleave", function () {
  countTime = setInterval(run, 3000)
})
