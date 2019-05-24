<template>
  <div>
    <div class="loginheader" >
      <i class="iconfont icon-shouye- " @click="$router.replace('/home')"></i>
      <span>网易严选</span>
      <i class="iconfont icon-icon_search" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche-" @click="$router.replace('/shopping')"></i>
    </div>
    <div class="img ">
      <img data-v-214c5fae="" src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
    </div>
    <div class="content">
      <div class="one">
        <input placeholder="邮箱" v-model="email" name="myemail" v-validate="'required|email'"/>
        <span style="color: red;" v-show="errors.has('myemail')">{{ errors.first('myemail') }}</span>
      </div>
      <div class="two">
        <input placeholder="账号密码"/>
        <button>获取验证码</button>
      </div>
      <div class="three">
        <span>注册账号</span>
        <span>忘记密码</span>
      </div>
      <button>登录</button>
      <div class="four" @click="$router.replace('/personal')">其他登录方式</div>
      <div class="five">
        <span>注册账号</span>
        <i class="iconfont icon-icon_next_arrow"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "emailLogin",
    data(){
      return{
        email:''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginheader
    border-bottom  1px solid #999
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
  .img

    padding 0 40px
    margin-top 40px
    display flex
    justify-content center
    img
      width 200px
      height 64px
  .content
    margin-top 100px
    padding 0 40px
    .one
      height 89px
      line-height 90px
      border-bottom 1px solid #999
      input
        font-size 24px
        border 0 none
        margin-top 20px

    .two
      height 90px
      margin-top 20px
      line-height 90px
      border-bottom 1px solid #999
      display flex
      justify-content space-between
      align-items center
      input
        font-size 24px
        border 0 none
      button
        width 168px
        height 59px
        background-color white
        font-size 30px
        border-radius  10px
        color black
    .three
      display flex
      justify-content space-between
      height 120px
      line-height 120px
      font-size 30px
      margin-top 20px
    button
      height 98px
      background-color #b4282d
      color white
      width 100%
      border 1px solid #b4282d
      font-size 32px
    .four
      margin-top 20px
      display flex
      justify-content center
      align-items center
      height 98px
      border 1px solid #b4282d
      font-size 32px
      color #b4282d
    .five
      display flex
      justify-content center
      align-items center
      margin-top 20px
      font-size 32px
      i
        font-size 32px
</style>
