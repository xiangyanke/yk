<template>
  <div class="welfare">
    <p>-新人专享礼-</p>
    <div>
      <div class="left">
        <span>新人专享礼</span>
        <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包">
      </div>
      <div class="right">
        <div class="rightTop">
          <div>
            <p>福利社</p>
            <span>今日特价</span>
          </div>
          <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="福利社">
        </div>
        <div class="rightBottom">
          <div>
            <p>新人拼团</p>
            <span>一元起包邮</span>
          </div>
          <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="新人拼团">
        </div>
        </div>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "welfare"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .welfare
    position absolute
    left 30px
    top 956px


    >p
      height 90px
      text-align center
      line-height 90px
      font-size 32px
      font-weight bold

    >div
      width 690px
      height 409px
      display flex

      .left
        text-align center
        background-color #f9e9cf
        margin-right 10px
        width 258px
        height 410px
        padding-left 42px
        padding-right 42px
        >span
          display block
          margin-top 20px
          font-size 32px
        >img
          display inline-block
          width 258px
          height 257px
          padding-top 20px
      .right
        position relative
        .rightTop
          position absolute
          left 0px
          top 0px
          height 200px
          width 342px
          background-color beige
          >div
            width 96px
            >p
              font-size 26px
              font-weight bold
            >span
              font-size 22px
          >img
            position absolute
            top 0px
            left 100px
            width 200px
            height 200px
        .rightBottom
          margin-top 10px
          position absolute
          left 0px
          top 200px
          width 342px
          height 200px
          background-color bisque
          >div
            width 128px
            >p
              font-size 26px
              font-weight bold
            >span
              font-size 22px
          >img
              position absolute
              left 100px
              top 0px
              width 200px
              height 200px





</style>
