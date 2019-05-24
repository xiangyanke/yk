<template>
  <div class="moods" >
    <div class="flash_header">
      <span class="flash_title">新品首发</span>
      <span class="flash_more">更多 &gt;</span>
    </div>
    <ul class="list clearfix" v-if="homeData.popularItemList">
      <li v-for="(item ,index ) in homeData.popularItemList " class="clearfix">
        <img :src="item.primaryPicUrl">
        <div class="text">
          <span class="one">{{item.name}}</span>
          <span class="two">{{item.simpleDesc}}</span>
          <span class="three">{{item.counterPrice}}</span>
        </div>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "moods",
    computed:{
      ...mapState(['homeData'])

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .moods
    padding-left 20px
    padding-top 20px
    padding-right 20px
    border-top 35px solid #eee
    margin-top 20px
    height 738px
    .flash_header
      display flex
      justify-content space-between
      align-items center
      font-size 32px
      height 100px
    .list
      >li
        width 216px
        height 318px
        margin-right 20px
        float left
        font-size 24px
        &:first-child
          width 100%
          height 320px
          display flex
          align-items center
          >img
            width 280px
            height 280px
            margin 0
          >div
            margin 0 50px
            overflow hidden
            text-overflow ellipsis
            white-space normal
        >img
          width 216px
          height 216px
          margin-bottom 12px
          background-color #f5f5f5
        .text
          .one
            color #333333
          .two
            font-size 24px
            color #7f7f7f
          .three
            color red
</style>
