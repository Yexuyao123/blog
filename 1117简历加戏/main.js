"use strict"
// const getElement = require("./util").getElement
// const addLabel = require("./util").addLabel
import { getElement, addLabel } from "./util/util.js"

const getEls = ["portfolio1", "portfolio2", "portfolio3", "portfolioBar", "picturejobs1", "picturejobs2", "picturejobs3", "zuopinji"]

 function x (id) {
   eleMap[id] = getElement(id)
 }
 id => getElement(id) 箭头右边没有{}代表直接return
 const eleMap = {}
 getEls.forEach(id => {
   eleMap[id] = getElement(id)
 })
// console.log(eleMap)
// Object.keys(eleMap).forEach(key => {
//   const value = eleMap[key]
//   console.log(key, value)
// })
// const queuingGetEle = {
//   portfolio1: "portfolio1",
//   portfolio2: "portfolio2",
//   portfolio3: "portfolio3",
//   portfolioBar: "portfolioBar",
//   picturejobs1: "picturejobs1",
//   picturejobs2: "picturejobs2",
//   picturejobs3: "picturejobs3",
//   zuopinji: "zuopinji"
// }
// const queuingGetEle = ["portfolio1", "portfolio2", "portfolio3", "portfolioBar", "picturejobs1", "picturejobs2", "picturejobs3", "zuopinji"]
// queuingGetEle.forEach(function (id, index) {
//   var value = queuingGetEle[key]
// })
const portfolio1 = getElement("portfolio1")
const portfolio2 = getElement("portfolio2")
const portfolio3 = getElement("portfolio3")
const portfolioBar = getElement("portfolioBar")
const picturejobs1 = getElement("picturejobs1")
const picturejobs2 = getElement("picturejobs2")
const picturejobs3 = getElement("picturejobs3")
const zuopinji = getElement("zuopinji")

portfolio1.onclick = function () {
  portfolioBar.className = "state-1"
  picturejobs2.style.display = "none"
  picturejobs3.style.display = "none"
  picturejobs1.style.display = "block"
  // zuopinji.style.height = "728px"
}
portfolio2.onclick = function () {
  portfolioBar.className = "state-2"
  picturejobs1.style.display = "none"
  picturejobs3.style.display = "none"
  picturejobs2.style.display = "block"
  // zuopinji.style.height = "728px"
}
portfolio3.onclick = function () {
  portfolioBar.className = "state-3"
  picturejobs1.style.display = "none"
  picturejobs2.style.display = "none"
  picturejobs3.style.display = "block"
  // zuopinji.style.height = "500px"
}
