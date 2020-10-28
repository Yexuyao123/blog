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


//第3版 遍历
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



//第4版 遍历优化，不是打断
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


//第5版 因数分解的结果是质数，只要判断质数
function iWantN(findInN) {
  if ((findInN > 1) && (findInN <= 3)) {
    let printOut = []
    for (i = 2; i < (findInN + 1); i++) {
      printOut.push(i)
    }
    console.log(printOut)
  }
  else if (findInN > 3) {
    let printOut = [2, 3]
    for (i = 4; i < findInN; i++) {
      let jMax = printOut.length
      for (j = 0; j < jMax; j++) {
        // console.log(printOut[j])检查j取数对不对
        if (i % (printOut[j]) === 0) {
          break;
        }
        else if (j === (jMax - 1)) {
          printOut.push(i);
          break;
        }
      }
    }
    console.log(printOut)
  }
}
iWantN(100)


//第6版 再次删除屎代码
function iWantN(findInN) {
  if (findInN >= 2) {
    let printOut = [2]
    for (i = 2; i < findInN; i++) {
      let jMax = printOut.length
      for (j = 0; j < jMax; j++) {
        console.log(printOut[j])
        if (i % (printOut[j]) === 0) {
          break;
        }
        else if ((j === (jMax - 1)) && (i !== 2)) {
          printOut.push(i);
          break;
        }
      }
    }
    console.log(printOut)
  }
}
iWantN(100) 


//第7版 再次精简运算
//36以内分解只需123456
//!for里面的i也要let声明
//记住了

function iWantN(findInN) {
  if (findInN >= 2) {
    let printOut = [2]
    for (i = 2; i < findInN; i++) {
      let getRoot = parseInt(i ** 0.5)
      let jMax = printOut.length
      for (j = 0; j < jMax; j++) {
        console.log(i)
        console.log(printOut[j])
        if (i % (printOut[j]) === 0) {
          break;
        }
        else if ((printOut[j] >= getRoot) && (i !== 2)) {
          printOut.push(i);
          break;
        }
      }
    }
    console.log(printOut)
  }
}
iWantN(100) 