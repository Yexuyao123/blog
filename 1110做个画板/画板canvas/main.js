// 生成标签
// const jianwai = addLabel("div", { className: "outside" })
// hang.appendChild(jianwai)
// 监听
// img.onerror = function (xxxxx) {
//   xxxxx.target.src = "./img/without.png"
//   xxxxx.target.className = "addImg"
// }
// 监听函数的绑定与移除
// document.addEventListener("mousemove", onMouseMove)
// document.removeEventListener("mousemove", onMouseMove)

// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d") // 拿到二次元，平面作图
// 填充(基点位置，边长)
// ctx.fillStyle = "green"
// ctx.fillRect(10, 10, 100, 100)
// 描边
// ctx.strokeStyle = "yellow"
// ctx.strokeRect(10, 10, 100, 100)
// 橡皮擦
// ctx.clearRect(50, 50, 60, 60)
// 画圆
// 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
// arc(x, y, radius, startAngle, endAngle, anticlockwise)
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
// 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。
// arcTo(x1, y1, x2, y2, radius)
// 开始绘图
// ctx.beginPath()
// 移动鼠标
// ctx.moveTo(95, 65)
// 绘制直线
// lineTo(x, y)
// ctx即context

// 生成一个element
function addLabel (laber, attributes) {
  const element = document.createElement(laber)
  for (const key in attributes) {
    element[key] = attributes[key]
  }
  return element
}
// 画圆
function drawCilcle (x, y, diamiter, pointColor, idNames) {
  const canvas = document.getElementById(idNames)
  const ctx = canvas.getContext("2d") // 获取上下文环境
  ctx.beginPath()
  ctx.fillStyle = pointColor
  ctx.arc(x, y, (diamiter / 2), 0, Math.PI * 2, true)
  ctx.fill()
  ctx.closePath()
}
// 画线
function drawLine (m, n, x, y, lineColor, lineWidth, idNames) {
  const canvas = document.getElementById(idNames)
  const ctx = canvas.getContext("2d") // 获取上下文环境
  ctx.beginPath()
  ctx.strokeStyle = lineColor // 线条的颜色
  ctx.lineWidth = lineWidth // 线条的宽度
  ctx.moveTo(m, n) // 起点
  ctx.lineTo(x, y) // 终点
  ctx.stroke() // 绘制
  ctx.closePath()
}
// 设置canvas的大小
function getParentSize (idNames) {
  const canvas = document.getElementById(idNames)
  const brothers = canvas.nextElementSibling
  const canvasWrap = canvas.parentNode
  canvas.width = canvasWrap.clientWidth - brothers.clientWidth // 获取到父元素的宽高并复制给canvas的宽高
  canvas.height = canvasWrap.clientHeight
}
// 获取标签通过id
function getElement (id) {
  return document.getElementById(id)
}

const paintBoard = getElement("paintBoard")
let painting = false // 记鼠标状态何时画画
const lastPoint = [] // 记录最后一个点坐标

getParentSize("canvas")

// 监听窗口缩放
window.addEventListener("resize", function (e) {
  getParentSize("canvas")
})

// 状态检验
if (document.body.ontouchstart !== undefined) { // 触屏检测：不是undefined就是null，null表示可以触屏
  paintBoard.ontouchstart = onTouchStart
  paintBoard.ontouchmove = onTouchMove
  paintBoard.ontouchend = onMouseUp
} else {
  // 按下鼠标
  paintBoard.onmousedown = onMouseDown
  // 移动鼠标
  document.onmousemove = onMouseMove
  // 松开鼠标
  document.onmouseup = onMouseUp
}

function onTouchStart (e) {
  const topBarH = getElement("toBar")
  const altitude = topBarH.clientHeight
  painting = true
  const x = e.touches[0].pageX
  const y = e.touches[0].pageY - altitude
  drawCilcle(x, y, 4, "black", "canvas")
  lastPoint.push(x)
  lastPoint.push(y)
}
function onTouchMove (e) {
  const topBarH = getElement("toBar")
  const altitude = topBarH.clientHeight
  if (painting) {
    const x = e.touches[0].pageX
    const y = e.touches[0].pageY - altitude
    drawLine(lastPoint[0], lastPoint[1], x, y, "black", 4, "canvas")
    lastPoint[0] = x
    lastPoint[1] = y
  }
}
function onMouseDown (e) {
  painting = true
  const x = e.layerX
  const y = e.layerY
  drawCilcle(x, y, 4, "black", "canvas")
  lastPoint.push(x)
  lastPoint.push(y)
}
function onMouseMove (e) {
  if (painting) {
    const x = e.layerX
    const y = e.layerY
    drawLine(lastPoint[0], lastPoint[1], x, y, "black", 4, "canvas")
    lastPoint[0] = x
    lastPoint[1] = y
  }
}
function onMouseUp () {
  painting = false
  lastPoint.splice(0, lastPoint.length)
}

const useEraser = addLabel("button", {
  className: "useEraser",
  style: "width:" + 50 + "px; height:" + 25 + "px;",
  textContent: "橡皮檫"
})
const tools = getElement("tools")
tools.appendChild(useEraser)
