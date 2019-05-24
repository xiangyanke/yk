<template>
  <div>
    <div class="loginheader" >
      <i class="iconfont icon-shouye- " @click="$router.replace('/home')"></i>
      <span>网易严选</span>

      <i class="iconfont icon-icon_search" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche-" @click="$router.replace('/shopping')"></i>


    </div>
    <div class="content">
      <div class="contenttop">
        <div>
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
        </div>
      </div>
      <div class="login">
        <div class="text" @click="$router.replace('/phoneLogin')">
          <i class="iconfont icon-icon_mobilephone" ></i>
          <span>手机号码登录</span>
        </div>
        <div class="text" @click="$router.replace('/emailLogin')">
          <i class="iconfont icon-icon_dmail"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="quick" >
          <span >手机号快捷注册</span>
          <i class="iconfont icon-icon_next_arrow"></i>
        </div>
      </div>
      <div class="icon">
        <div >
          <i class="iconfont icon-icon_wechat"></i>
          <span>微信</span>
        </div>
        <div>
          <i class="iconfont icon-icon_qq"></i>
          <span>QQ</span>
        </div>
        <div class="none">
          <i class="iconfont icon-xiaoxi-"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "personal"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginheader
    height 100px
    margin-left 20px
    margin-right 20px
    line-height 100px
    >i
      width 24px
      height 22px
      font-size 50px
    >span
      margin-left 200px
      margin-right 200px
      font-size 32px
      width 74px
      text-align center
  .content
    .contenttop
      div
        height 410px
        display flex
        justify-content center
        align-items center
        img
          width 267px
          height 90px
    .login
      height 685px
      .text
        width  672px
        height 102px
        line-height 102px
        text-align center
        margin auto
        background-color #b4282d
        font-size 32px
        margin-bottom 20px
        color white
        >i
          font-size 32px
      .quick
        margin auto
        width  672px
        height 102px
        text-align center
        font-size 32px
        >i
          font-size 32px
    .icon
      display flex
      height 40px
      align-items center
      justify-content center
      div
        font-size 32px
        padding 0 20px
        border-right 2px solid #eee
        i
          font-size 32px
      .none
        border-right none













</style>
