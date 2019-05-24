<template>
  <div class="goods"  v-if="homeData.sceneLightShoppingGuideModule">
    <ul>
      <li v-for="(item,index) in homeData.sceneLightShoppingGuideModule" :key="index">
        <p>{{item.styleItem.title}}</p>
        <p>{{item.styleItem.desc}}</p>
        <div>
          <img :src="item.styleItem.picUrlList[0]" />
          <img  :src="item.styleItem.picUrlList[1]" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "good",
    computed:{
      ...mapState(['homeData'])

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.goods
  padding 0 20px
  ul
    height 528px
    li
      float left
      width 333px
      height 250px
      background-color #eee
      padding 10px 0 0 10px
      &:nth-child(2n+1)
        margin-right 5px
      p
        margin-left 10px
        font-size 32px
        &:nth-child(2)
          font-size 24px
      div
        display flex
        img
          width 150px
          height 150px



</style>
