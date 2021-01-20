// 获取标签通过id
function getElement (id) {
  return document.getElementById(id)
}
// 生成一个element
function addLabel (laber, attributes) {
  const element = document.createElement(laber)
  if (arguments.length === 2){
    for (const key in attributes) {
      element[key] = attributes[key]
    }
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

function getTagName (ele) {
  return ele.tagName
} // 获取标签名如DIV/A/SPAN等，这个API返回的一定是大写，可使用.toLowerCase()转为小写，但是toLowerCase对于文本节点出来的undefined会报错

function show (el, display = "block") { // display默认block，之后的参数也必须带默认值
  el.style.display = display
}
function hide (el) {
  el.style.display = "none"
}

const getEls = ["portfolio1", "portfolio2", "portfolio3", "portfolioBar", "picturejobs1", "picturejobs2", "picturejobs3", "zuopinji", "wrapper", "topNavBar", "body", "backToTop", "userCard", "skill", "zuopinzhanshi", "messages","postMessageForm"]
const eleMap = {}
getEls.forEach(id => {
  eleMap[id] = getElement(id)
})
export { getElement, addLabel, addClass, removeClass, changeClass, getTagName, eleMap, show, hide }
