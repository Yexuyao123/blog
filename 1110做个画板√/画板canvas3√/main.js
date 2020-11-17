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
// 橡皮檫
function clearRect (x, y, width, height, idNames) {
  const canvas = document.getElementById(idNames)
  const ctx = canvas.getContext("2d") // 获取上下文环境
  ctx.clearRect(x, y, width, height)
}

// 设置canvas的大小
function getParentSize (idNames) {
  const canvas = document.getElementById(idNames)
  const brothers = canvas.nextElementSibling
  const canvasWrap = canvas.parentNode
  canvas.width = canvasWrap.clientWidth - brothers.clientWidth
  // 获取到父元素的宽高并复制给canvas的宽高
  // 扣除tools的宽
  // console.log(brothers.clientWidth)
  canvas.height = canvasWrap.clientHeight
}

const paintBoard = getElement("paintBoard")
let painting = false // 记鼠标状态何时画画
const lastPoint = [] // 记录最后一个点坐标
const penOrErase = { pen: true, erase: false }
const usePen = getElement("usePen")
const useErase = getElement("useErase")
const pen = getElement("pen")
const erase = getElement("erase")
const canvas = getElement("canvas")
let firstTime = true
let uponColor = "black"
let uponDiamiter = 6
let ifDelete = false // 监听是否清屏
let ifDownload = false // 监听是否下载

function onPen (e) {
  penOrErase.pen = true
  penOrErase.erase = false
  // 按下鼠标
  paintBoard.onmousedown = onMouseDown
  // 移动鼠标
  document.onmousemove = onMouseMove
  // 松开鼠标
  document.onmouseup = onMouseUp
  pen.style.animation = "slidein 0.5s 1 linear"
  pen.style.display = "block"
  erase.style.display = "none"
  usePen.style.backgroundColor = " rgba(13, 102, 110, 0.7)"
  useErase.style.backgroundColor = "rgb(217, 250, 246)"
  firstTime = false
}
function onErase (e) {
  penOrErase.pen = false
  penOrErase.erase = true
  // 按下鼠标
  paintBoard.onmousedown = onMouseDownClearRect
  // 移动鼠标
  document.onmousemove = onMouseMoveClearRect
  // 松开鼠标
  document.onmouseup = onMouseUpClearRect
  pen.style.display = "none"
  erase.style.animation = "slidein 0.5s 1 linear"
  erase.style.display = "block"
  useErase.style.backgroundColor = " rgba(13, 102, 110, 0.7)"
  usePen.style.backgroundColor = "rgb(217, 250, 246)"
  firstTime = false
}
usePen.onclick = onPen
useErase.onclick = onErase

getParentSize("canvas")

// 监听窗口缩放
window.addEventListener("resize", function (e) {
  getParentSize("canvas")
})
// 清屏
const useDelete = getElement("useDelete")
useDelete.addEventListener("click", function (e) {
  getParentSize("canvas")
  useDelete.classList.add("blink")
  ifDelete = true
})
// 下载
const useDownload = getElement("useDownload")
// useDownload.addEventListener("click", function (e) {
//   downloadCanvas(this, canvas, "image.png")
// })
// function downloadCanvas (link, canvasId, filename) {
//   link.href = canvasId.toDataURL(filename)
//   console.log(link.href)
//   link.Download = filename
// }
useDownload.addEventListener("click", function (e) {
  useDownload.classList.add("blink")
  ifDownload = true
  const url = canvas.toDataURL("image/png")
  const a = addLabel("a")
  a.href = url
  a.Download = "xxxxxxx"
  a.click()
})

// 状态检验
if (document.body.ontouchstart !== undefined) { // 触屏检测：不是undefined就是null，null表示可以触屏
  const canvasBody = getElement("canvasBody")
  canvasBody.style.position = "fixed"
  canvasBody.style.top = "0"
  canvasBody.style.left = "0" // 解决手机触屏会拖动页面而不是使用画笔的bug
  const seletionTools = getElement("seletionTools")
  const deleteDownloadTools = getElement("deleteDownloadTools")
  deleteDownloadTools.classList.add("hidden")
  seletionTools.classList.add("hidden")
  pen.classList.add("hidden")
  erase.classList.add("hidden")
  const tools = getElement("tools")
  tools.style.width = "50px"
  paintBoard.ontouchstart = onTouchStart
  paintBoard.ontouchmove = onTouchMove
  paintBoard.ontouchend = onMouseUp
} else {
  if (firstTime) {
    // 按下鼠标
    paintBoard.onmousedown = onMouseDown
    // 移动鼠标
    document.onmousemove = onMouseMove
    // 松开鼠标
    document.onmouseup = onMouseUp
  }
  usePen.onclick = onPen
  useErase.onclick = onErase
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
  if (ifDelete) {
    useDelete.classList.remove("blink")
  }
  if (ifDownload) {
    useDownload.classList.remove("blink")
  }
  const x = e.layerX
  const y = e.layerY
  drawCilcle(x, y, uponDiamiter, uponColor, "canvas")
  lastPoint.push(x)
  lastPoint.push(y)
}
function onMouseMove (e) {
  if (painting) {
    const x = e.layerX
    const y = e.layerY
    drawCilcle(x, y, uponDiamiter, uponColor, "canvas")
    drawLine(lastPoint[0], lastPoint[1], x, y, uponColor, uponDiamiter, "canvas")
    lastPoint[0] = x
    lastPoint[1] = y
  }
}
function onMouseUp (e) {
  painting = false
  lastPoint.splice(0, lastPoint.length)
}
function onMouseDownClearRect (e) {
  painting = true
  const x = e.layerX
  const y = e.layerY
  clearRect(x, y, (uponErase / 3 * 4), uponErase, "canvas")
}
function onMouseMoveClearRect (e) {
  if (painting) {
    const x = e.layerX
    const y = e.layerY
    clearRect(x, y, (uponErase / 3 * 4), uponErase, "canvas")
  }
}
function onMouseUpClearRect (e) {
  painting = false
}

// 工具栏
// const tools = getElement("tools")
// const useEraser = addLabel("button", {
//   className: "useEraser",
//   style: "width:" + 80 + "%; height:" + 25 + "px;",
//   textContent: "橡皮擦"
// })
// useEraser.style = "width:" + 90 + "%; height:" + 25 + "px;" +
//   "font-size:" + 8 + "px"
//   tools.appendChild(useEraser)

// 追加9个颜色
// const nineColor = getElement("nineColor")
// const palette = { color1: "black", color2: "white", color3: "red", color4: "rgb(247, 91, 1)", color5: "yellow", color6: "green", color7: "blue", color8: "rgb(227, 1, 247)", color9: "rgb(110, 0, 86)" }
// for (let i = 1; i < 10; i++) {
//   const oneColor = addLabel("div", {
//     className: "pencolor",
//     style: "width:" + 20 + "px; height:" + 20 + "px;border-radius: " + 10 + "px;" +
//     "background-color:" + palette["color" + (i)] +
//     ";float:left;"
//   })
//   oneColor.id = "color" + i
//   oneColor.onclick = onClickColors
//   nineColor.appendChild(oneColor)
// }

// function onClickColors (e) {
//   const color = e.target.id
//   const getColor = palette[color]
//   uponPenColor.style.backgroundColor = getColor
// }
// Object.values(palette)
const nineColor = getElement("nineColor")
const palette = ["black", "white", "red", "rgb(247, 91, 1)", "yellow", "green", "blue", "rgb(227, 1, 247)", "rgb(110, 0, 86)"]
const uponPenColor = getElement("uponPenColor")
palette.forEach(function (color, index) {
  const oneColor = addLabel("div", {
    className: "pencolor",
    style: "width:" + 20 + "px; height:" + 20 +
    "px;border-radius: " + 10 + "px;" +
    "background-color:" + color +
    ";float:left;margin:0 1px 0;"
  })
  oneColor.id = "color_" + index
  oneColor.onclick = onClickColors
  nineColor.appendChild(oneColor)
})
// 监听点击元素的background
function onClickColors (e) {
  const color = e.target.id.split("_")[1]
  const getColor = palette[color]
  uponPenColor.style.backgroundColor = getColor
  // console.log(getColor)
  uponColor = getColor
}

// 追加4个直径
const fourDiamiter = getElement("fourDiamiter")
const penSize = [6, 12, 18, 24]
const uponPenDiamiter = getElement("uponPenDiamiter")
penSize.forEach(function (diamiter, index) {
  const oneDiamiter = addLabel("div", {
    className: "penSize",
    style: "width:" + diamiter + "px; height:" + diamiter + "px;border-radius: " + (diamiter / 2) + "px;" +
    "background-color:rgb(188,227,224);float:left; margin:0 10px 0;"
  })
  oneDiamiter.id = "diamiter_" + index
  oneDiamiter.onclick = onClickDiamiter
  fourDiamiter.appendChild(oneDiamiter)
})
// 监听点击元素的Diamiter
function onClickDiamiter (e) {
  const Diamiter = e.target.id.split("_")[1]
  const getDiamiter = penSize[Diamiter]
  uponPenDiamiter.style.width = getDiamiter + "px"
  uponPenDiamiter.style.height = getDiamiter + "px"
  uponPenDiamiter.style.borderRadius = (getDiamiter / 2) + "px"
  uponDiamiter = getDiamiter
}

// 追加4个橡皮檫尺寸
const fourSize = getElement("fourSize")
const eraseSize = [10, 15, 20, 25]
const uponEraseSize = getElement("uponEraseSize")
eraseSize.forEach(function (diamiter, index) {
  const oneErase = addLabel("div", {
    className: "eraseSize",
    style: "width:" + (diamiter / 3 * 4) + "px; height:" + diamiter + "px;border-radius: " + (diamiter / 3 * 2) + "px;" +
    "background-color:rgb(188,227,224);float:left; margin:0 10px 0;"
  })
  oneErase.id = "size_" + index
  oneErase.onclick = onClickErase
  fourSize.appendChild(oneErase)
})
// 监听点击元素的size
let uponErase = 15
function onClickErase (e) {
  const size = e.target.id.split("_")[1]
  const getSize = eraseSize[size]
  uponEraseSize.style.width = (getSize / 3 * 4) + "px"
  uponEraseSize.style.height = getSize + "px"
  uponEraseSize.style.borderRadius = (getSize / 3 * 2) + "px"
  // 注意这里px后面不能加分号；
  uponErase = getSize
}
