<template>
  <div class="brand">
    <div class="brandHeader">
      <span>品牌制造商</span>
      <span>更多 > </span>
    </div>
    <ul class="clearfix">
      <li>
        <span>海外制造商</span>
        <span>9.9元起</span>
        <span v-show="isShow">上新</span>
      </li>
      <li>
        <span>CK制造商</span>
        <span>32.9元起</span>
        <span v-show="isShow">上新</span>
      </li>
      <li>
        <span>Nine West 制造商</span>
        <span>219元起</span>
        <span v-show="!isShow">上新</span>
      </li>
      <li>
        <span>新秀丽制造商</span>
        <span>34.9元起</span>
        <span v-show="!isShow">上新</span>
      </li>


    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    components: {},
    name: "brand",
    data(){
      return{
        isShow:false
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.brand
  height 650px
  margin-top 1460px
  padding 0 20px
  .brandHeader
    display flex
    justify-content space-between
    height 100px
    font-size 32px
    line-height 100px
  ul

    li
      float left
      width 343px
      height 260px
      background-repeat no-repeat
      background-size 100% 100%
      &:nth-of-type(1)
        margin 0 5px 5px 0
        background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png")
      &:nth-of-type(2)
        margin-bottom 5px
        background-image url("http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png")
      &:nth-of-type(3)
        margin 0 5px 5px 0
        background-image url("http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png")
      &:nth-of-type(4)
        margin-bottom 5px
        background-image url("http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png")
      span
        float left
        font-size 22px
        text-align center
        &:nth-of-type(1)
          width 100%
          text-align center
          margin-top 20px
        &:nth-of-type(2)
          font-size 24px
          color #777
          margin-left 25%
        &:nth-of-type(3)
          font-size 24px
          width 64px
          height 32px
          color #fff
          text-align center
          border-radius 5px
          background-color #CBB693
          margin-left 10px



</style>
