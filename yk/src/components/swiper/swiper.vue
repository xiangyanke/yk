<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会"></div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="春季四件套换新">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination">

      </div>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../common/swiper/swiper.css'
  import Swiper from 'swiper'
  export default {
    name: "swiper",
    mounted(){
      let mySwiper = new Swiper ('.swiper-container', {
//    direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',

        }
      })
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.page
  position absolute
  top 135px
  left 0px

  .swiper-container
    width 750px
    height 400px

    .swiper-wrapper
      .swiper-slide

        img
          width 100%
          height 100%




</style>
