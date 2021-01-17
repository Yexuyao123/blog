var http = require('http') 
var fs = require('fs')
var url = require('url')
//node.js的3个模块，自带的
var port = process.argv[2] //端口=第2个参数
// 除了0任何数字都是true
// 0 == false
// !0 == true
// !!a
// console.log(`port === ${port}`)
// !是取反的意思
// process.argv.forEach(i=>console.log(i))
if(!port){ // '0'
  console.log('请指定端口号好不啦？ \n node server.js 8888 这样不会吗？') //  \n  是回车
  process.exit(1) //程序结束
} 

/*
数字0 字符串'' false undefiend null  统统都是false 
*/
// {}代表是个字典
//底下用,隔开
// 冒号:左边的是键(key)
// 冒号:右边的是值(value)
// a是一个字典，a里面的b 是1，c是2，d是3
var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true) //解析请求的路径
    var path = request.url 
    var query = ''
    if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) } //解析请求的参数
    var pathNoQuery = parsedUrl.pathname  //a.b
    var queryObject = parsedUrl.query
    var method = request.method
    /******** 从这里开始看  ，上面不要看 ************/
    console.log('方方说：得到 HTTP 路径\n' + path)
    console.log('方方说：查询字符串为\n' + query)
    console.log('方方说：不含查询字符串的路径为\n'   + pathNoQuery)
    /******** 代码结束，下面不要看 ************/
  })

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

// process.exit(1) //程序结束
