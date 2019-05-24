<template>
  <div>
    <div class="list" v-if="homeData.categoryModule"
         v-for="(item,index) in homeData.categoryModule" :key="index">
      <img v-lazy="item.titlePicUrl" :src="item.titlePicUrl"  />
      <div class="ullist">
        <ul class="listcontent" >
          <li class="item" v-for="(items ,index) in item.itemList" :key="index">
            <img :src="items.primaryPicUrl" />
            <span class="name">{{items.name}}</span>
            <span class="color">{{items.counterPrice}}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "list",
    computed:{
      ...mapState(['homeData'])

    },
    watch:{
      homeData(){
        this.$nextTick(()=> {
            new BScroll('.ullist', {
              click: true,//启用点击，因为better-scroll会默认禁用掉元素的点击事件
              scrollX: true //横向滑动
            })
          })

      }



    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .list
    height 773px
    border-top 20px solid #eee
    >img
      height 400px
      margin-bottom 20px
    .ullist
      display flex
      width 750px
      .listcontent
        display flex
        height 333px
        overflow hidden
        .item
          float left
          height 333px
          >img
            width 200px
            height 200px
            background-color #eee
            margin-right 10px
          .name
            font-size 22px
            overflow hidden
            text-overflow ellipsis
            white-space normal
            width 200px
          .color
            font-size 22px
            color red



</style>
