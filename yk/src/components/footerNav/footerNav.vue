<template>
  <footer class="footer" >
    <ul>
      <li class="item" @click="$router.replace('/home') " :class="{on:$route.path==='/home'}">
        <i class="iconfont icon-shouye-"></i>
        <span>首页</span>
      </li>
      <li class="item" @click="$router.replace('/fent')" :class="{on:$route.path==='/fent'}">
        <i class="iconfont icon-fenlei-"></i>
        <span>分类</span>
      </li>
      <li class="item" @click="$router.replace('/things' ) || $router.replace('/things/recommend')" :class="{on:$route.path==='/things'|| $route.path==='/things/recommend' ||$route.path==='/things/pick'}">
        <i class="iconfont icon-xiaoxi-"></i>
        <span>识物</span>
      </li >
      <li class="item" @click="$router.replace('/shopping')"  :class="{on:$route.path==='/shopping'}">
        <i class="iconfont icon-gouwuche-"></i>
        <span>购物车</span>
      </li>
      <li class="item" @click="$router.replace('/personal')" :class="{on:$route.path==='/personal'}">
        <i class="iconfont icon-wode-"></i>
        <span>个人</span>
      </li>
    </ul>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "footerNav"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.footer
  position fixed
  bottom 0px
  left 0px
  width 100%
  background-color white
  ul
    border-top 0.75px solid #eee
    height 100px
    display flex
    justify-content space-around
    .item
      padding-top 10px
      height  76px
      text-align center
      &.on
        color red
      i
        display inline-block
        width 40px
        height 40px
        font-size 40px

      span
        display block
        font-size 24px

</style>
