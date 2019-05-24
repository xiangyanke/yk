<template>
  <div class="recommend_box" >
    <div class="recommend_content" >
      <ul v-for="(items,index) in recommendData" :key="index">
        <li v-for="(item,index) in items.topics" :key="index">
          <line4show v-if="item.style===1" :item="item"></line4show>
          <two v-if="item.style===2" :item="item"></two>
          <three v-if="item.style===3" :item="item"></three>
          <four v-if="item.style===4" :item="item"></four>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import line4show from  '../recommend/components/line4show/line4shpw.vue'
  import two from  '../recommend/components/two/two.vue'
  import three from  '../recommend/components/three/three.vue'
  import four from  '../recommend/components/four/four.vue'
    import {mapState} from 'vuex'
  export default {
    name: "recommend",
    computed:{
      ...mapState(['recommendData'])
    },
    components:{
      line4show,
      two,
      three,
      four
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend_box
    width 100%
    height 100000000px
    /*max-height 1070px*/
    overflow hidden
    box-sizing border-box
    padding-top 100px
    font-size 28px
    background-color: #fff
    .recommend_content
      width 100%


</style>
