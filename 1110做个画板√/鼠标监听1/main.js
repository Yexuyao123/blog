// 生成一个element
function addLabel (laber, attributes) {
  const element = document.createElement(laber)
  for (const key in attributes) {
    element[key] = attributes[key]
  }
  return element
}

// 生成标签
// const jianwai = addLabel("div", { className: "outside" })
// hang.appendChild(jianwai)
// 监听
// img.onerror = function (xxxxx) {
//   xxxxx.target.src = "./img/without.png"
//   xxxxx.target.className = "addImg"
// }

// 按下鼠标
const paintBoard = document.getElementById("paintBoard")
let painting = false
document.onmousedown = function (ddd) {
  painting = true
  const diamiter = 2 // 直径
  const x = ddd.clientX - (diamiter / 2)
  const y = ddd.clientY - (diamiter / 2)
  const points = addLabel("div", { id: "smallPoint" })
  points.style =
    "width:" + diamiter + "px;" +
    "height:" + diamiter + "px;" +
    "left:" + x + "px;" +
    "top:" + y + "px;" +
    "background-color: black; position: absolute;" +
    "border-radius:" + (diamiter / 2) + "px"
  paintBoard.appendChild(points)
}
// 移动鼠标
document.onmousemove = function (mmm) {
  if (painting) {
    const diamiter = 2 // 直径
    const x = mmm.clientX - (diamiter / 2)
    const y = mmm.clientY - (diamiter / 2)
    const points = addLabel("div", { id: "smallPoint" })
    points.style =
      "width:" + diamiter + "px;" +
      "height:" + diamiter + "px;" +
      "left:" + x + "px;" +
      "top:" + y + "px;" +
      "background-color: black; position: absolute;" +
      "border-radius:" + (diamiter / 2) + "px"
    paintBoard.appendChild(points)
  }
}
// 松开鼠标
document.onmouseup = function (uuu) {
  painting = false
}
