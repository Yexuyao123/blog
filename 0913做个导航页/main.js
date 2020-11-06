var keys = {
  0: {
    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
    6: "7",
    7: "8",
    8: "9",
    9: "0",
    length: 10,
  },
  1: {
    0: "q",
    1: "w",
    2: "e",
    3: "r",
    4: "t",
    5: "y",
    6: "u",
    7: "i",
    8: "o",
    9: "p",
    length: 10,
  },
  2: {
    0: "a",
    1: "s",
    2: "d",
    3: "f",
    4: "g",
    5: "h",
    6: "j",
    7: "k",
    8: "l",
    length: 9,
  },
  3: { 0: "z", 1: "x", 2: "c", 3: "v", 4: "b", 5: "n", 6: "m", length: 7 },
  length: 4,
};
// 数组里面有数组
// var keys = {
//     '0': {' 1 ',' 2 ',' 3 ',' 4 ',' 5 ',' 6 ',' 7 ',' 8 ',' 9 ',' 0 ','length':10},
//     '1': {' q ',' w ',' e ',' r ',' t ',' y ',' u ',' i ',' o ',' p ','length':10},
//     '2': {' a ',' s ',' d ',' f ',' g ',' h ',' j ',' k ',' l ','length':9},
//     '3': {' z ',' x ',' c ',' v ',' b ',' n ',' m ','length':7},
//     'length': 4
// }
//数组keys的长度为4，每个数里面还包裹这数组
var hash = {
  q: "qq.com",
  w: "weibo.com",
  e: "lee.me",
  r: "renren.com",
  t: "tianya.com",
  y: "youtube.com",
  u: "uc.com",
  i: "iqiyi.com",
  o: "opere.com",
  p: undefined,
  a: "acfun.tv",
  s: "sohu.com",
  z: "zhihu.com",
  m: "www.mcdonalds.com.cn",
};
var hashInLocalStorage = JSON.parse(localStorage.getItem("uuu") || "null");
// 取出localstorage中uuu对应的hash
//! 这里的hashInLocalStorage是我们取的一个变量用来存缓存里面的uuu，所以l大写小写都可以
if (hashInLocalStorage) {
  hash = hashInLocalStorage;
}
//如果用户之前保存过缓存，就会优先选取之前保存的数据

index = 0;
while (index < keys["length"]) {
  //0123
  hang = document.createElement("div");
  keyboard1.appendChild(hang);
  row = keys[index]; //第一个数组0 第二个数组1 第三个数组2 第四个数组3
  //console.log(row)
  index2 = 0;
  while (index2 < row["length"]) {
    //index=0时row的length=10，index=1时row的length=10，index=2时row的length=9，index=3时row的length=7
    //index2的取值：index=0时0-9，index=1时0-9，index=2时0-7，index=3时0-6
    jianwai = document.createElement("div");
    jianwai.classList.add("outside");
    hang.appendChild(jianwai);
    jian = document.createElement("kbd");
    jian.textContent = row[index2];
    jian.classList.add("example");
    bianji = document.createElement("button");
    bianji.id = row[index2];
    bianji.textContent = "编辑";
    bianji.onclick = function (aaa) {
      //监听用户鼠标在编辑容器中即button按钮中点击x所生成的对象
      key = aaa["target"]["id"];
      //! aaa['target']就是用户点击的元素
      //获取到用户点击的对象aaa中rarget的id值，如用户点击q，则变量key会被赋值上q
      // key = key.trim()
      //! 这是变量值
      x = prompt("输入你想保存的网址"); //weixin.com
      hash[key] = x; //将用户输入的网址写入hash对象中的key的值,即q:weixin.com
      //! 这是对象里的key值
      // console.log(hash)
      // 这里发现hash中存入的不是q:weixin.com，而是' q ':weixin.com导致最后website获取q的值的时候还是原来的值所以应该补充key = key.trim()清楚左右L空格
      localStorage.setItem("uuu", JSON.stringify(hash));
      //将用户最新hash数据保存到uuu
      //! 注意这里的localStorage第一个l必须小写
    };
    jian.appendChild(bianji);
    jianwai.appendChild(jian);
    index2 = index2 + 1;
  }
  index = index + 1;
}
document.onkeypress = function (aaa) {
  //监听用户在文件中按下按键x所生成的对象
  // console.log(hash)
  key = aaa["key"]; //带引号的key是字符串（key：value中的key，不带引号的key是变量用来赋值
  //! 这是变量赋值
  // console.log(hash[key])
  website = hash[key];
  if (website) {
    //location.href = 'http://' + website
    //当前窗口打开
    window.open("http://" + website, "_blank"); //新窗口打开
  }
};
