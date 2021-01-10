const http = require("http")
const fs = require("fs")
const url = require("url")
const port = process.argv[2]
// 引入node.js的API
const qs = require("./qs.min")

if (!port) {
  console.log("请指定端口号好不啦？\nnode server.js 8888 这样不会吗？")
  process.exit(1)
}
// node server.js 8888
// node对应process.argv[0]
// server.js对应process.argv[1]
// 8888对应process.argv[2]
fs.writeFileSync("./db", 100)

const server = http.createServer(function (request, response) {
  const parsedUrl = url.parse(request.url, true)
  const pathWithQuery = request.url
  let queryString = ""
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"))
  }
  const path = parsedUrl.pathname
  const query = parsedUrl.query
  const method = request.method

  /** ****** 从这里开始看，上面不要看 ************/

  console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery)

  if (path === "/") { // 如果用户请求的是/路径
    response.statusCode = 200
    const amount = fs.readFileSync("./db", "utf-8")
    // string = string.replace("&&&amount&&&", amount)
    const htmlString = fs.readFileSync("./index1.html", "utf-8")
    const string = htmlString.replace("&&&amount&&&", amount)
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    response.write(string)
    response.end()
  } else if (path === "/style.css") {
    response.statusCode = 200
    const string = fs.readFileSync("./style.css", "utf-8")
    response.setHeader("Content-Type", "text/css;charset=utf-8")
    response.write(string)
    response.end()
  } else if (path === "/main.js") {
    response.statusCode = 200
    const string = fs.readFileSync("./main.js", "utf-8")
    response.setHeader("Content-Type", "text/css;charset=utf-8")
    response.write(string)
    response.end()
  } else if (path === "/pay" && method.toUpperCase() === "POST") { // 用于表单post
    request.on("data", (numberString) => {
      const numberStr = numberString.toString("utf-8")
      const numberObj = qs.parse(numberStr)

      response.statusCode = 200
      const amount = fs.readFileSync("./db", "utf-8")
      const newAmount = amount - numberObj.number1 - numberObj.number2

      fs.writeFileSync("./db", newAmount)
      response.end()
    })
  } else if (path === "/pay" && method.toUpperCase() === "GET") { // 用于监听提交input标签的script标签get请求
    response.statusCode = 200
    response.setHeader("Content-Type", "application/javascript")
    // response.write("alert('success'); window.location.reload()")
    response.write("XXX.call(undefined,'success')")
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    response.write("你输入的路径不存在对应的内容")
    response.end()
  }

  /** ****** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log("监听 " + port + " 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:" + port)
