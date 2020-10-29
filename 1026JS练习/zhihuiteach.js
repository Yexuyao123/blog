//递归
//函数内包裹函数

function add(n, r) {
  if (n === 0) {
    return r;
  }
  return add(n - 1, r) + n;
}
function add(n, r) {
  return n ? add(n - 1, r) + n : r;
}
console.log(add(100, 0));

//当n = 100 时

//闭包
//函数内调用函数外的变量，保护函数内的数据不被外部读取
//缺点就是内存会一直留在那要手动=null

function father() {
  let n = 1;
  function add() {
    n++;
    console.log(n);
  }
  function minus() {
    n--;
    console.log(n);
  }
  return {
    add: add,
    minus: minus,
  };
}

let fn = father();
fn.add();
fn.add();
fn.minus();
fn.add();
fn.minus();
fn.minus();
fn.minus();
