// 生成一个element

function main () {
  const canvas = document.getElementById("canvas")
  setCanvasSize(canvas)
  window.addEventListener("resize", () => setCanvasSize(canvas))
  // 绑定事件
  // canvas.addEventListener("mousedown", onMouseDown)
  // canvas.addEventListener("mousemove", onMouseMove)
  // canvas.addEventListener("mouseup", onMouseUp)

  bind(canvas, {
    mousedown: onMouseDown,
    mousemove: onMouseMove,
    mouseup: onMouseUp
  })
}
window.addEventListener("load", main)

function unbind (el, eventMap) {
  for (const event in eventMap) {
    el.removeEventListener(event, eventMap[event])
  }
}
function bind (el, eventMap) {
  for (const event in eventMap) {
    el.addEventListener(event, eventMap[event])
  }
}

// 画圆
function drawCilcle (el, obj) {
  // const x= obj.x
  // const y= obj.y
  // const diamiter= obj.diamiter
  // const fillStyle= obj.fillStyle
  const { layerX, layerY, diamiter, fillStyle } = obj // es6 对象解构
  const ctx = el.getContext("2d")
  ctx.beginPath()
  ctx.fillStyle = fillStyle
  ctx.arc(layerX, layerY, (diamiter / 2), 0, Math.PI * 2, true)
  ctx.fill()
  ctx.closePath()
}
// 画线
function drawLine (el, obj) {
  const { startX, startY, layerX, layerY, strokeStyle, lineWidth } = obj
  const ctx = el.getContext("2d")
  ctx.beginPath()
  ctx.strokeStyle = strokeStyle // 线条的颜色
  ctx.lineWidth = lineWidth // 线条的宽度
  ctx.moveTo(startX, startY) // 起点
  ctx.lineTo(layerX, layerY) // 终点
  ctx.stroke() // 绘制
  ctx.closePath()
}

function setCanvasSize (el) {
  const parent = el.parentNode
  el.width = parent.clientWidth
  el.height = parent.clientHeight
}

const mouseObj = {
  canPaint: false,
  last: []
}
const WIDTH = 100
const COLOR = "black"
// 按下鼠标
// function onMouseDown (event) {
function onMouseDown ({ layerX, layerY, target }) {
  mouseObj.canPaint = true
  drawCilcle(target, { layerX, layerY, diamiter: WIDTH, fillStyle: COLOR })
  mouseObj.last.push(layerX)
  mouseObj.last.push(layerY)
}

// 移动鼠标
function onMouseMove ({ layerX, layerY, target }) {
  if (mouseObj.canPaint) {
    const [startX, startY] = mouseObj.last
    drawLine(target, { startX, startY, layerX, layerY, strokeStyle: COLOR, lineWidth: WIDTH })
    mouseObj.last[0] = layerX
    mouseObj.last[1] = layerY
  }
}

function onMouseUp () {
  mouseObj.canPaint = false
  mouseObj.last.splice(0, mouseObj.last.length)
}

// const x = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// function fn (x) {
//   const a = x.a
//   const b = x.b
//   console.log(a)
// }
// //es6 对象解构
// function fn (x) {
//   const {a,b} = x
//   console.log(a)
// }
// // 参数解构
// function fn ({a,b}) {
//   console.log(a)
// }

// fn(x)
