const printer = (printString, container, timeSpace = 20) => {
  let step = 0
  const timer = setInterval(() => {
    step += 1
    container.forEach(element => {
      element.innerHTML = printString.substring(0, step)
      container[1].innerHTML = Prism.highlight(container[1].innerHTML, Prism.languages.css)
      document.querySelector("#codeContainer").scrollTop = 10000 // 可抽
    })
    if (step > printString.length) {
      window.clearInterval(timer)
      // console.log(container[1].innerText)
      // console.log(container[1].innerHTML)
      // container[1].innerHTML = Prism.highlight(container[1].innerHTML, Prism.languages.css)
      const lastStyleString = container[0].innerHTML
      const lastCodeString = container[1].innerHTML
      printer2AddPaper(printString2, lastStyleString, lastCodeString, container)
    }
  }, timeSpace)
}

const styleTag = document.querySelector("#styleTag")
const codeContainer = document.querySelector("#codeContainer>code")
const container = [styleTag, codeContainer]
const printString1 = `
  /*逢生 - 张碧晨
  *词/曲：张碧晨
  *编曲/制作人：郑楠
  *怕天花板下眠不醒的危险
  *不愿闭上眼 嘿
  *怕历尽千辛都漂不到终点
  *盼冰山不盼船 嘿
  *越亲近的越背叛得彻底
  *半接纳半黯然 嘿
  *孤独之地 从无路可退
  *瞳孔都无焦点 嘿
  *阳光 照不到的地方
  *有月光伴在近旁
  *好像 世界从不空旷
  *我在 我在
  *心房 最灰暗的地方
  *有希望总在绽放
  *我是我 最大的庇护港
  *我在 我在
  *怕被风里的刺骨击倒
  *竖高高的墙 嘿
  *梦的彼岸被寒雨冰冻
  *照炙热的光 嘿
  *面对苦痛 边呻吟
  *边阻挡 落着泪畅想 嘿
  *走近那些 似被废弃的房
  *有霓虹在亮 嘿
  *我爱 海崖上的花
  *我看 它不惧风浪
  *我爱 结巴的男孩 听他 歌唱
  *我在 我在 我在 我在
  *众生中的一次生 众我中的一个我
  *众生中的一次生 众我中的一个我 */
  
  /* 抄了一份歌词 */

  /* 设置下全局样式 */
  * {
    transition: all 1s;
    margin: 0;
    padding: 0;
  }
  /* 修改背景颜色 */
  body {
    background-color:rgba(39, 36, 199, 0.9);
  }
  /* emmmm……好像写不下，字小一丢丢 */
  body {
    font-size:14px;
  }
  /* 调整字体颜色，再加个边框滚动条 */
  body {
    color:rgb(3, 62, 92);
  }
  .token.comment {
    color: rgb(3, 62, 92);
  }
  #codeContainer {
    overflow: scroll;
    background-color:rgba(217, 217, 220, 0.9);
    border:2px solid black;
    padding:10px;
  }
  /* 再加个代码高亮 */
  .token.selector {
    color: rgb(5, 141, 50);
  }
  .token.property {
    color: rgb(219, 9, 37);
  }
  .token.punctuation{
    color: rgb(157, 252, 6);
  }
  .token.function {
    color: rgb(245, 4, 193);
  }
  /* 有点小无聊，好吧不玩了让我在右边加一张纸吧 */`
const printString2 = `
  .paper {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    border: 3px rgb(49, 31, 31) solid;
    background-color: blanchedalmond;
    padding: 20px;
  }
  /* 看吧这就是我刚刚360°转体加的纸 */
  .paper{
    transform:rotate(360deg);
  }
  /* 啥？你问我张碧晨是谁？？？？？？ */
  /* 那就让我来介绍一下吧，请看右边👉 */`
const printString3 = `
张碧晨，1989 年 9 月 10 日出生于天津市，中国内地流行乐女歌手，毕业于天津外国语大学。
2012 年，参加“K-POP 世界庆典”歌唱比赛，获得中国赛区总冠军；同年，代表中国赴韩参加总决赛，并获得最优秀奖。
2013 年 7 月，以韩国女子组合 SunnyDays 成员正式出道。
2014 年，参加浙江卫视《中国好声音第三季》获得年度总冠军，并于赛后签约梦响当然在国内正式出道；同年，凭借歌曲《一吻之间》获得第 22 届东方风云榜“年度十大金曲”奖。
2015 年获得第 14 届华鼎奖华语年度最受欢迎新锐歌手；同年，推出首支个人单曲《白芍花开》。
2016 年，凭借歌曲《年轮》获得第 23 届东方风云榜“年度十大金曲”奖，并获得“最佳年度飞跃奖”以及“全民选择女歌手”奖；同年，举办了个人首场“自饰北京演唱会”。
2017 年，凭借《开往早晨的午夜》获得第 24 届东方风云榜年度概念专辑奖；同年，登上湖南卫视音乐节目《歌手 2017》，并作为挑战歌手晋级到决赛中。
2018 年，获得第 25 届东方风云榜音乐盛典最受欢迎女歌手。

|    基    |         本         |    信    |                            息                            |
| :------: | :----------------: | :------: | :------------------------------------------------------: |
|  中文名  |       张碧晨       |   职业   |                           歌手                           |
|  外文名  |      Diamond       | 经纪公司 |                         少城时代                         |
|   国籍   |        中国        | 代表作品 |    曾经守候、凉凉、年轮、开往早晨的午夜、一吻之间、望    |
|   民族   |        汉族        | 主要成就 |           2017 亚洲金曲大赏内地最受欢迎女歌手            |
|  出生地  |        天津        |    -     |            亚洲新歌榜年度盛典年度媒体推荐歌手            |
| 出生日期 | 1989 年 9 月 10 日 |    -     |         2016 亚洲新歌榜年度盛典年度媒体推荐歌手          |
|   星座   |       处女座       |    -     |   2016MusicRadio 中国 Top 音乐盛典内地年度最受欢迎新人   |
|   血型   |        O 型        |    -     |   2016MusicRadio 全球流行音乐年度盛典年度最佳新人金奖    |
|   身高   |       168 cm       |    -     |           第 22 届东方风云榜音乐盛典最佳新锐歌           |
|   体重   |       46 kg        |    -     | 第 23 届东方风云榜音乐盛典全民选择女歌手、最佳年度飞跃奖 |
| 毕业院校 |   天津外国语大学   |   语种   |                  中文、英文、法文、韩文                  | `

// 入口在这里
printer(printString1, container)

const creatPaper = function () {
  const paper = document.createElement("pre")
  paper.classList = "paper"
  const body = document.querySelector("#body")
  body.appendChild(paper)
  return document.querySelector(".paper")
}
const printer2AddPaper = function (printString, preStyleString, preCodeString, container, timeSpace = 20) {
  const PaperTag = creatPaper.call()
  let step = 0
  const timer = setInterval(() => {
    step += 1
    container[0].innerHTML = preStyleString + printString2.substring(0, step)
    container[1].innerHTML = preCodeString + printString2.substring(0, step)
    container[1].innerHTML = preCodeString + Prism.highlight(printString2.substring(0, step), Prism.languages.css)
    document.querySelector("#codeContainer").scrollTop = 10000 // 可抽
    if (step > printString.length) {
      window.clearInterval(timer)
      printer3AddMD(printString3, PaperTag)
    }
  }, timeSpace)
}
const printer3AddMD = function (printString, container, timeSpace = 20) {
  let step = 0
  const timer = setInterval(() => {
    step += 1
    container.innerHTML = printString.substring(0, step)
    if (step > printString.length) {
      window.clearInterval(timer)
    }
  }, timeSpace)
}
