//找出100以内的质数

//第1版 屎代码
let printOut = [2]
let scan = []
for (i = 3; i < 101; i++) {
  scan.push(i);
}
let del = []
scan.forEach(function (a) {
  for (i = 2; (i < a) && ((i - 1) !== 0); i++) {
    if (a % i === 0) {
      del.push(a)
      // i = a不允许
    }
  }
})
scan.forEach(function (live, equal) {
  del.forEach(function (dele) {
    live === dele && (scan[equal] = 0)
  })
})
scan.forEach(function (live, equal) {
  if (live !== 0) {
    printOut.push(live)
  }
})
console.log(printOut)


// function a(a,b){
//   if (a>b){
//     return true
//   } else {
//     return false
//   }
// }

// function aa(a,b){
//   return a>b
// }

// let xxx = a>b?true:false

//第2版 优化
let printOut = [2]
function iWantN(findInN) {
  for (i = 3; i < (findInN + 1); i++) {
    let alwaysZero = 0
    for (j = 2; j < i; j++) {
      (i % j === 0) ? (alwaysZero = alwaysZero + 1) : (alwaysZero = alwaysZero + 0)
    }
    if (alwaysZero === 0) {
      printOut.push(i)
    }
  }
  console.log(printOut)
}
iWantN(100)


//第3版 优化
let printOut = [2]
function iWantN(findInN) {
  for (i = 3; i < (findInN + 1); i++) {
    let alwaysZero = 0
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        alwaysZero++
      }
    }
    if (alwaysZero === 0) {
      printOut.push(i)
    }
  }
  console.log(printOut)
}

iWantN(100)


//第4版 优化
let printOut = []
function iWantN(findInN) {
  for (i = 2; i < (findInN + 1); i++) {
    for (j = 2; j < (i + 1); j++) {
      if (j === i) {
        printOut.push(i);
        break;
      }
      else if (i % j === 0) {
        break;
      }
    }
  }
  console.log(printOut)
}
iWantN(100)

