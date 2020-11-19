"use strict"
// 获取标签通过id
function getElement (id) {
  return document.getElementById(id)
}
// 生成一个element
function addLabel (laber, attributes) {
  const element = document.createElement(laber)
  for (const key in attributes) {
    element[key] = attributes[key]
  }
  return element
}

function addClass (ele, className) {
  ele.classList.add(className)
} // 添加类别
function removeClass (ele, className) {
  ele.classList.remove(className)
} // 移除类别
function changeClass (ele, classList) {
  ele.className = classList
} // 更改类别

export { getElement, addLabel, addClass, removeClass, changeClass }
