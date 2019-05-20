<template>
  <div>
    <div class="header">
      <span>购物车</span>
      <span class="red">领券</span>
    </div>
    <div class="nav">
      <div>
        <i class="iconfont icon-icon_safety_fill"></i>
        <span> 30天无忧退货</span>
      </div>
      <div>
        <i class="iconfont icon-icon_safety_fill"></i>
        <span> 48小时无忧退货</span>
      </div>
      <div>
        <i class="iconfont icon-icon_safety_fill"></i>
        <span> 慢88元免邮费</span>
      </div>
    </div>
    <img data-v-e6de86ca="" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="cartImg" class="cart-img">
    <div class="btn">
      <div class="one">去添加点什么吧</div>
      <div class="two" @click="$router.replace('/personal')">登录</div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "shoping"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .header
    height 88px
    display flex
    justify-content space-between
    margin-left 20px
    margin-right 20px
    line-height 88px
    font-size 32px
    .red
      color red
  .nav
    height 70px
    display flex
    justify-content space-around
    font-size 24px
    text-align center
    line-height 70px

  img
    width 248px
    height 248px
    margin-top 350px
    margin-left 250px
  .btn
    width 750px
    text-align center
    .one
      font-size 22px
    .two
      margin auto
      margin-top 40px
      width 480px
      height 92px
      background-color #b4282d
      line-height 92px
      text-align center
      color white
      font-size 30px



</style>
