<template>
  <div v-if="homeData.personalShop">
    <div class="customize">
      <div class="title">私人定制</div>
      <div class="swiper-container asdf">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(items,index) in personalArr">
            <div class="item " v-for="(item,index) in items">
              <img :src="item.primaryPicUrl">
              <span>{{item.name}}</span>
              <span>{{item.counterPrice}}</span>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    name: "customize",
    mounted() {
      let mySwiper = new Swiper('.asdf', {
        //  direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },


      })
    },


    computed: {

      ...
        mapState(['homeData']),
      personalArr() {
        let arr = []
        let data = []
        this.homeData.personalShop.forEach((item, index) => {
          if (arr.length < 4) {
            arr.push(item)
            if (arr.length == 3) {
              data.push(arr)
              arr = []
            }
          }
        })
//        console.log(data);
        return data
      }
    }
  }


</script>

<style lang="stylus" rel="stylesheet/stylus" >
.customize
  overflow hidden
  margin-left 25px
  height 447px
  margin-top 20px
  border-top 35px solid #eee
  .title
    height 100px
    margin-left 40px
    font-size 32px
    line-height 100px
  .swiper-container
    .swiper-wrapper
    //  width 2800px
      height 346px
      .swiper-slide
        .item
          float left
          width 210px
          margin-left 10px
          text-align center
          img
            width 216px
            height 216px
          span
            overflow: visible
            font-size 22px
            white-space normal



</style>
