// const onClick = function (e) {
//   // const currentTag = e.currentTarget
//   e.currentTarget.classList.add("circle")
//   console.log(e.currentTarget)
//   console.log(e)
//   console.log(e.target)
// }

let n = 0
for (let i = 0; i < 7; i++) {
  const onClickP = function (e) {
    const currentTag = e.currentTarget
    setTimeout(function () {
      console.log(e)
      console.log(e.target)
      console.log(currentTag)
      currentTag.classList.add("circle")
    }, n * 100)
    n = n + 1
  }
  const circleN = document.getElementById("circle" + (i + 1))
  circleN.addEventListener("click", onClickP, true)
}
