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

///this练习
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.guojia = "中国";
  this.ziwojieshao = function () {
    console.log(`我是${this.name}`);
    console.log(`我现在${this.age}岁`);
    console.log(`我是${this.guojia}人`);
  };
}

Person.prototype.hello = function () {
  console.log(this);
};

let 小明 = new Person("小明", 18);
let 小红 = new Person("小红", 16);

console.log(小明);
console.log(小红);

console.log(小明.ziwojieshao === 小红.ziwojieshao);
console.log(小明.hello === 小红.hello);

小明.ziwojieshao();
小明.guojia = "美国";
小明.ziwojieshao();
小明.ziwojieshao = function () {};
console.log("---");
小红.ziwojieshao();

Person.prototype.ziwojieshao = function () {
  console.log("我不自我介绍了");
};

小红.ziwojieshao();
