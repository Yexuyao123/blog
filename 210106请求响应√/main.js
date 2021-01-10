function getEle (eleClass) {
  const ele = document.getElementById(eleClass)
  yexy[eleClass] = ele
}
const arrClass = ["amount", "button", "input"]
const yexy = {}
arrClass.forEach(getEle)
yexy.button.addEventListener("click", () => {
  const cashBalances = yexy.amount.innerText
  const newBalances = parseInt(cashBalances, 10) - 1
  yexy.amount.innerText = newBalances
})
// 这只是在html上修改，数据库上没有存档，刷新一下数值又会回去的

yexy.input.addEventListener("click", () => {
  const script = document.createElement("script")
  script.src = "/pay"
  document.body.appendChild(script)
  script.addEventListener("load", () => {
    alert("付款成功")
    window.location.reload()
    document.body.removeChild(script)
  })
  script.addEventListener("error", () => {
    alert("付款失败")
  })
})
// 监听input标签点击后，script标签get请求是否成功

window.XXX = function (result) {
  if (result === "success") {
    alert("server.js(服务器)执行了XXX")
    alert("我得到的结果是" + result)
    alert("付款成功")
  } else {
    alert("付款失败")
  }
}
