import { View } from "./base/view.js"
import { Controller1 } from "./base/controller.js"

// eslint-disable-next-line no-unused-expressions
!(function () {
  // 作品展示轮播Swiper
  const view = View("#mySwiper")
  const controller = Controller1({
    init: function (view) {
      this.swiperInit()
    },
    swiperInit: function () {
      // eslint-disable-next-line no-new
      new Swiper(this.view.querySelector(".swiper-container"), {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      })
    }
  })
  
  // eslint-disable-next-line no-useless-call
  controller.init(view)
}.call())
