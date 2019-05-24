<template>
  <div class="flash_sale_box" >
    <div class="flash_header">
      <div class="left_info">
        <span class="flash_title">限时购</span>
        <div class="flash_time">
          <span class="hour">03</span>
          <span class="point">:</span>
          <span class="minutes">04</span>
          <span class="point">:</span>
          <span class="seconds">05</span>
        </div>
      </div>
      <span class="flash_more">更多 &gt;</span>
    </div>
    <ul class="list clearfix" v-if="homeData.flashSaleModule">
      <li class="item" v-for="(item,index) in homeData.flashSaleModule.itemList">
        <img :src=" item.picUrl">
        <div class="money">
          <span class="activityPrice">¥{{item.activityPrice}}</span>
          <span class="originPrice">¥{{item.originPrice}}</span>
        </div>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "Time",
    computed:{
      ...mapState(['homeData'])

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .flash_sale_box
    margin-top 20px
    border-top 35px solid #eee
    .flash_header
      display flex
      align-items center
      justify-content space-between
      .left_info
        display flex
        align-items center
        .flash_title
          font-size 32px
          line-height 100px
          margin 0 20px 0 50px
        .flash_time
          display flex
          .hour
          .minutes
          .seconds
            display block
            width 36px
            height 36px
            font-size 24px
            line-height 36px
            text-align center
            color #fff
            background-color: #333
          .point
            margin 0 20px
            font-size 28px
      .flash_more
        font-size 28px
        line-height 100px
        margin-right 50px
    .list
      margin-left 20px

      .item
        width 216px
        height 318px
        float left
        margin-right 20px
        img
          width 216px
          height 216px
          background-color #eee
        .money
          display flex
          width 216px
          height 100px
          align-items center
          justify-content center
          font-size 32px
          .activityPrice
            color red
          .originPrice
            text-decoration line-through


</style>
