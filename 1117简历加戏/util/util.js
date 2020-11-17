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
export { getElement, addLabel }
