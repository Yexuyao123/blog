// eslint-disable-next-line no-unused-expressions
!(function () {
  // 作品展示轮播Swiper
  const view = document.querySelector("#mySwiper")
  const controller = {
    view: null,
    init: function (view) {
      this.view = view
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
  }
  // eslint-disable-next-line no-useless-call
  controller.init.call(controller, view)
}.call())
