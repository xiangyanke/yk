<template>
  <div>
    <div class="line_show_box">
      <div class="line1">
        <img :src="item.avatar"/>
        <span>{{item.nickname}}</span>
      </div>
      <div class="line2">{{item.title}}</div>
      <img :src="item.picUrl"/>
      <div class="line4">
        <span class="iconfont icon-gouwuche-"></span>
        <span>{{item.readCount}}人看过</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "line4show",
    computed:{
      ...mapState(['recommendData'])
    },
    props:{
      item:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .line_show_box
    border-bottom 20px solid #eee
    margin-top 20px
    width 100%
    box-sizing border-box
    background-color: #fff
    .line1
      width 100%
      margin 0 30px
      margin-bottom 20px
      font-size 28px
      >img
        display inline-block
        width 40px
        height 40px
        margin-right 20px
        border-radius 50%
        vertical-align middle
      >span
        fonr-size 28px
    .line2
      margin 0 30px
      margin-bottom 15px
      font-size 36px
      color #333
    >img
      width 700px
      height 388px
      margin 0 30px
      margin-bottom 15px
    .line4
      margin 0 30px
      >span
        font-size 28px
        color #999
</style>
