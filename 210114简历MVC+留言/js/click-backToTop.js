import { eleMap } from "./util.js"
// 声明时间曲线

(function () {
  // 鼠标点击回到顶部
  const view = eleMap.backToTop
  const controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      this.view.addEventListener("click", (e) => {
        e.preventDefault()
        this.gotoTop()
      })
    },
    gotoTop: function () {
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      requestAnimationFrame(animate)
      const coords = { y: window.scrollY }
      new TWEEN.Tween(coords)
        .to({ y: 0 }, 1000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => {
          window.scrollTo(0, coords.y)
        })
        .start()
    }
  }
  controller.init.call(controller, view)
}.call())
