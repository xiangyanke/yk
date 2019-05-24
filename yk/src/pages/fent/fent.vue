<template>
  <div class="categoryList" v-if="categorydata">
    <div class="search-box" @click="$router.push('/search')">
      <i class="iconfont icon-icon_search"></i>
      <span>收搜商品 ，共xxxx好物 </span>
    </div>
    <div class="content">
      <div class="listNav" >
        <ul>
          <li v-for="(category,index) in categorydata" :key="index"
              @click="to(index)" :class="{active:categorydata[corindex]===category}"
          >{{category.name}}

          </li>
        </ul>
      </div>
      <div class="ul1">
        <div class="fents"  v-if="categorydata[corindex]">
          <div class="fentscontent" >
            <img :src="categorydata[corindex].wapBannerUrl" />
          </div>
          <div class="list">
            <ul>
              <li v-for="(item,index) in categorydata[corindex].subCateList" :key="index">
                <img :src="item.bannerUrl" />
                <span>{{item.name}}</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "fent",
    data() {
      return {
        subCateList: [],
        corindex: 0

      }

    },

    computed: {
      ...mapState(['categorydata']),


    },

   async mounted() {

      await this.$store.dispatch('getcategoryList', () => {
      this.$nextTick(() => {
        new BScroll('.ul1', {
          click: true
        })
      })
    })
  },


    methods:{
      to(index){
        this.corindex = index
      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.categoryList
  .search-box
    position fixed
    top 0
    left 0px
    display flex
    justify-content center
    height 56px
    align-items center
    background white
    margin 15px 25px

    &:after
      display block
      content ''
      position absolute
      top 70px
      left -25px
      width 750px
      height 1px
      background-color #eee
    >i
      width 28px
      height 28px
      font-size 28px
    >span
      font-size 28px
      background-color #eee
  .content
    position absolute
    top 56px
    left 0px
    .listNav

      >ul
        >li
          font-size 30px
          margin-top 40px
          height 50px
          line-height 50px
          position relative
          width 163px
          text-align center
          margin-left 3px
          &.active
            border-left 6px solid red
    .ul1
      position absolute
      left 190px
      top 56px
      .fents
        height 100000px
        .fentscontent
          margin-bottom 30px
          img
            width 528px
            height 192px
        .list
          >ul
            display flex
            flex-wrap wrap
            width 100%
            >li
              text-align center
              width 144px
              margin-right 30px
              >img
                width 144px
                height 144px



</style>
