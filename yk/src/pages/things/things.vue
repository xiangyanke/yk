<template>
  <div>
    <div class="things">
      <div class="header" >
        <div class="icon">
          <i class="iconfont icon-shouye- " @click="$router.replace('/home')"></i>
        </div>
        <div class="two">
          <span class="no" :class="{on:isShow}" @click=" isShow=true; $router.replace('/things/recommend') ">发现</span>
          <span class="off" :class="{on:!isShow}"  @click=" isShow=false; $router.replace('/things/pick')">甄选家</span>
        </div>
        <div class="one">
          <i class="iconfont icon-icon_search" @click="$router.push('/search')"></i>
          <i class="iconfont icon-gouwuche-" @click="$router.replace('/shopping')"></i>
        </div>
      </div>
      <div class="things_tab">
        <ul >
          <li :class="{active: currId ===item.tabId}"
            v-for="(item,index) in topData" @click="gotab(item.tabId)">{{item.tabName}}</li>
        </ul>
      </div>
      <router-view></router-view>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "things",
    data(){
      return{
        isShow :true,
        currId:9
      }
    },
    computed:{
      ...mapState(['recommendData']),
      ...mapState(['topData'])
    },

    mounted(){
      this.$store.dispatch('getrecommendData')
      this.$store.dispatch('gettopData')

    },
    methods:{
      gotab(tabId){
        this.currId = tabId
        switch (tabId){
          case 9:{
            this.$router.replace('/things/recommend')
          }
          break
        }

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .things
     height 100000px
    .header
      background-color white
      position fixed
      align-items center
      font-size 32px
      display flex
      height 100px
      .icon
        margin-left 20px
      .two
        padding  0 200px
        .no
          &.on
            color red
            border-bottom 2px solid red
        .off
          &.on
            color red
            border-bottom 2px solid red
      >div
        i
          font-size 50px
    .things_tab
      position fixed
      top 88px
      left 0
      width 100%
      height 74.5px
      overflow hidden
      font-size 28px
      border-top 1px solid #ddd
      background-color: #fafafa
      display flex

      >ul
        display flex
        justify-content space-around

        >li
          display flex
          height 100%
          box-sizing border-box
          padding 0 10px
          line-height 74.5px
          &.active
            color red
            border-bottom 6px solid lightcoral

</style>
