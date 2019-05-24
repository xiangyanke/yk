<template>
  <div class="flash_sale_box" >
    <div class="flash_header">
      <span class="flash_title">新品首发</span>
      <span class="flash_more">更多 &gt;</span>
    </div>
    <ul class="list clearfix"  v-if="homeData.newItemList">
      <li class="item" v-for="(item,index) in homeData.newItemList">
        <img :src=" item.scenePicUrl">
        <div class="money">
          <span class="text">{{item.name}}</span>
          <span class="activityPrice">¥{{item.counterPrice}}</span>

        </div>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "New",
    computed:{
      ...mapState(['homeData'])

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .flash_sale_box
    margin-top 20px
    border-top 35px solid #eee
    overflow hidden
    padding-left 10px
    height 736px
    .flash_header
      display flex
      align-items center
      justify-content space-between
      font-size 32px
    .list
      .item
        float left
        img
          width 216px
          height 216px
        .money
          width 216px
          height 100px
          font-size 24px
          .text
            color #7f7f7f

          .activityPrice
            color red




</style>
