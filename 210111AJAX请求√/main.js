function getEle (eleClass) {
  const ele = document.getElementById(eleClass)
  yexy[eleClass] = ele
}
const arrClass = ["amount", "button", "input"]
const yexy = {}
arrClass.forEach(getEle)

yexy.button.addEventListener("click", () => {
  const request = new XMLHttpRequest()
  request.open("POST", "/yyyexy")
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
  request.send()
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log("请求响应都结束了")
      if (request.status >= 200 && request.status < 299) {
        console.log("请求成功了")
        const resText = (request.responseText)
        const resObj = window.JSON.parse(resText)
        console.log(resObj)
        console.log(typeof (resObj))
        console.log(request.getAllResponseHeaders())
      } else if (request.status >= 400) {
        console.log("请求失败了")
      }
    }
  }
})
