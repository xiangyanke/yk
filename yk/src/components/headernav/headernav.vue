<template>
  <div class="headernav" v-if="homeData">
    <ul >
      <li v-for="(item ,index) in homeData.kingKongModule.kingKongList" :key="index">
        <img :src="item.picUrl" alt="导航列表">
        <span>{{item.text}}</span>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "headernav",
    computed:{
      ...mapState(['homeData'])

    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .headernav
    position absolute
    left 0px
    top 606px
    background-color #eee
    width 750px
    >ul

      >li
        float left
        width 110px
        height 156px
        padding 10px 20px 9px
        text-align center
        >img
          width 110px
          height 110px
          margin-bottom 10px
        >span
          font-size 24px
          width 110px
          height 36px
          margin-top 10px


</style>
