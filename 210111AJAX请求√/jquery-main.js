function getEle (eleClass) {
  const ele = document.getElementById(eleClass)
  yexy[eleClass] = ele
}
const arrClass = ["amount", "button", "input"]
const yexy = {}
arrClass.forEach(getEle)

// 自己实现jQuery的AJAX
window.jQuery.ajax = function ({ method, url, headers, body }) {
  // ES6 解构赋值
  // const { method, url, headers, body, successFn, failFn } = options
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest()
    request.open(method, url)
    for (const key in headers) {
      request.setRequestHeader(key, headers[key])
    }
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 299) {
          resolve.call(undefined, request)
        } else if (request.status >= 400) {
          reject.call(undefined, request)
        }
      }
    }
    request.send(body)
  })
}
window.$ = window.jQuery

// yexy.button.addEventListener("click", () => {
//   window.$.ajax("POST", "/yyyexy", "a=1&b=2", successFn, failFn)
// })
// 如果是GET请求，没有body,用这种方法只能传undefined
// 或者用对象把参数也封装起来，给参数一个命名空间

yexy.button.addEventListener("click", () => {
  window.$.ajax({ // 直接把对象作为参数传进来
    method: "POST",
    url: "/yyyexy",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "a=1&b=2"
  }).then(
    (request) => {
      console.log("请求成功了")
      console.log(request.getAllResponseHeaders()) // 获取响应头
      const resText = (request.responseText)
      console.log(window.JSON.parse(resText)) // 获取响应的内容
    },
    (request) => {
      console.log("请求失败了")
    }
  )
})
