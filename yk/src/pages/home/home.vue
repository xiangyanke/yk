<template>
  <div class="home">
    <!--//头部-->
    <home-header></home-header>
    <!--//轮播图-->
    <swiper></swiper>
    <div class="nav">
      <ul>
        <li >
          <i class="iconfont icon-icon_dingtalk_line"></i>
          <span>网易自营商品</span>
        </li>
        <li >
          <i class="iconfont icon-icon_safety_fill"></i>
          <span>30天无忧退货</span>
        </li>
        <li >
          <i class="iconfont icon-icon_gather_fill"></i>
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>
    <!--列表-->
    <header-nav></header-nav>
    <!--福利-->
    <welfare></welfare>
    <!--商品直供-->
    <brand></brand>





  </div>
</template>

<script type="text/ecmascript-6">
  import swiper from '../../components/swiper/swiper.vue'
  import homeheader from "../../components/homeheader/homeheader.vue";
  import headernav from '../../components/headernav/headernav.vue'
  import welfare from '../../components/welfare/welfare.vue'
  import brand from '../../components/brand/brand.vue'
  export default {
    name: "home",
    components: {
      "home-header":homeheader,
      swiper,
      "header-nav":headernav,
      welfare,
      brand,
    },





  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.home
  height 10000px

  .nav
    position absolute
    left 0px
    top 534px
    width 750px
    >ul
      display flex
      justify-content space-between
      align-items center
      height 72px
      >li
        display flex

        >i
          width 32px
          height 32px
          font-size 32px
          color red

        >span
          display inline-block
          width 144px
          height 32px
          line-height 32px
          font-size 20px
          color red



</style>
