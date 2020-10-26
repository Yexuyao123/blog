// 用3种写法打印出200以内6的倍数
// 1.while  2.for  3. Array.prototype.forEach
// 例：6 12 18 ...

let i = 0
while (i < 201) {
    i += 6;
    if (i < + 200) {
        console.log(i);
    } else { }
}

for (let i = 1; i < 201; i++) {
    if (i % 6 === 0) {
        console.log(i);
    } else { }
}

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




let a = []
for (i = 0; i < 200; i++) {
    a.push(0)
}

a.forEach(function (_, b) {
    if (b % 6 === 0) {
        console.log(b);
    }
})

Array(200).fill(0).forEach((_,b)=> b % 6 && console.log(b))