// 1、初始化数据
function init () {
  const keys = {
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
      length: 10
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
      length: 10
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
      length: 9
    },
    3: { 0: "z", 1: "x", 2: "c", 3: "v", 4: "b", 5: "n", 6: "m", length: 7 },
    length: 4
  }
  let hash = {
    1: "wufazhuce.com",
    2: undefined,
    3: "360kan.com",
    4: "4399.com",
    5: "51zxw.net",
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
    0: undefined,
    q: "qzone.qq.com",
    w: "weibo.com",
    e: "ele.me",
    r: "renren.com",
    t: "taobao.com",
    y: "youku.com",
    u: "uc.com",
    i: "iqiyi.com",
    o: "opere.com",
    p: "piaohua.com",
    a: "amazon.cn",
    s: "suning.com",
    d: "douban.com",
    f: undefined,
    g: "igame.qq.com",
    h: "mgtv.com",
    j: "jd.com",
    k: "kfc.com.cn",
    l: "lol.qq.com",
    z: "zhihu.com",
    x: "wx.qq.com",
    c: "cctv.com",
    v: "v.qq.com",
    b: "bilibili.com",
    n: "pvp.qq.com",
    m: "www.mcdonalds.com.cn"
  }
  const hashInLocalStorage = JSON.parse(localStorage.getItem("uuu") || "null")
  // 取出localstorage中uuu对应的hash
  //! 这里的hashInLocalStorage是我们取的一个变量用来存缓存里面的uuu，所以l大写小写都可以
  if (hashInLocalStorage) {
    hash = hashInLocalStorage
  }
  // 如果用户之前保存过缓存，就会优先选取之前保存的数据
  return { keyx: keys, hashx: hash }
  // 这里不能用两句return，通过哈希包裹一起return出去
}
// 2、生成一个element
function addLabel (laber, attributes) {
  const element = document.createElement(laber)
  for (const key in attributes) {
    element[key] = attributes[key]
  }
  return element
}

// 1、初始化数据
const hashA = init()
console.log(hashA)
const keys = hashA.keyx
const hash = hashA.hashx

// 2、生成键盘
for (let index = 0; index < keys.length; index++) {
  const hang = addLabel("div")
  const keyboard1 = document.getElementById("keyboard1")
  keyboard1.appendChild(hang)

  const row = keys[index] // 第一个数组0 第二个数组1 第三个数组2 第四个数组3
  for (let index2 = 0; index2 < row.length; index2++) {
    // index=0时row的length=10，index=1时row的length=10，index=2时row的length=9，index=3时row的length=7
    // index2的取值：index=0时0-9，index=1时0-9，index=2时0-7，index=3时0-6
    const jianwai = addLabel("div", { className: "outside" })
    hang.appendChild(jianwai)
    const jian = addLabel("kbd", { textContent: row[index2], className: "example" })
    const img = creatImg()
    const bianji = creatBianji()
    jian.appendChild(img)
    jian.appendChild(bianji)
    jianwai.appendChild(jian)

    // 生成一个img
    function creatImg () {
      const img = addLabel("img")
      if (hash[row[index2]]) {
        img.src = "http://" + hash[row[index2]] + "/favicon.ico"
        img.className = "logoImg"
      } else {
        // img.className = "lost";
        img.src = "./img/without.png"
        img.className = "addImg"
      }
      img.onerror = function (xxxxx) {
        xxxxx.target.src = "./img/without.png"
        xxxxx.target.className = "addImg"
      }
      return img
    }
    // 生成一个编辑
    function creatBianji () {
      const bianji = addLabel("button", { id: row[index2], textContent: "编辑" })
      bianji.onclick = function (aaa) {
        // 监听用户鼠标在编辑容器中即button按钮中点击x所生成的对象
        const button2 = aaa.target
        const key = button2.id
        // aaa['target']就是用户点击的元素
        // 获取到用户点击的对象aaa中rarget的id值，如用户点击q，则变量key会被赋值上q
        // key = key.trim()
        //! 这是变量值
        const x = prompt("输入你想保存的网址") // weixin.com
        const img2 = button2.previousSibling
        img2.src = "http://" + x + "/favicon.ico"
        img2.className = "logoImg"

        img2.onerror = function (xxxxx) {
          xxxxx.target.src = "./img/without.png"
          xxxxx.target.className = "addImg"
        }
        hash[key] = x
        // 将用户输入的网址写入hash对象中的key的值,即q:weixin.com
        // 这是对象里的key值
        // 这里发现hash中存入的不是q:weixin.com，而是' q ':weixin.com导致最后website获取q的值的时候还是原来的值所以应该补充key = key.trim()清楚左右L空格
        localStorage.setItem("uuu", JSON.stringify(hash))
        // 将用户最新hash数据保存到uuu
        // 注意这里的localStorage第一个l必须小写
      }
      return bianji
    }
  }
}

document.onkeypress = function (aaa) {
  // 监听用户在文件中按下按键x所生成的对象
  const key = aaa.key // 带引号的key是字符串（key：value中的key，不带引号的key是变量用来赋值，这是变量赋值
  const website = hash[key]
  if (website) {
    // location.href = 'http://' + website，当前窗口打开
    window.open("http://" + website, "_blank") // 新窗口打开
  }
}
