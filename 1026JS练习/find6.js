// 用3种写法打印出200以内6的倍数
// 1.while  2.for  3. Array.prototype.forEach
// 例：6 12 18 ...

//方法1
let i = 0
while (i < 201) {
    i += 6;
    if (i < + 200) {
        console.log(i);
    } else { }
}
//偷懒
//不允许{}空，if就好了，不要else


//方法2
for (let i = 1; i < 201; i++) {
    if (i % 6 === 0) {
        console.log(i);
    } else { }
}


//方法3
a = Array()
a.length = 200
for (i = 0; i < a.length; i++) {
    a[i] = i + 1
}
a.forEach(function (b) {
    if (b % 6 === 0) {
        console.log(b);
    } else { }
})
//任何没有见过的变量都必须声明
//let a = []


//方法2修改
let a = []
for (i = 0; i < 200; i++) {
    a.push(0)
}


//方法3修改
a.forEach(function (_, b) {
    if (b % 6 === 0) {
        console.log(b);
    }
})


//大神版本一句话解决
Array(200).fill(0).forEach((_,b)=> (b + 1) % 6 || console.log(b+1))
//声明一个数组长度为200
//fill全部位置填入0
//b % 6 && console.log(b)左边为true右边就会运行，左边为false右边不会运行
//b % 6 ==0 是false
// b + 1 % 6 || console.log(b+1)
//true||console.log(1)会返回true,不执行console.log(b+1)
//false||console.log(1) 执行console.log(b+1)