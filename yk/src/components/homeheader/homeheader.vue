<template>
  <div class="header">
    <div class="content">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选">
      <div class="search-box">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="放大镜">
        <span class="show">收搜商品，共11111好件</span>
      </div>
      <span class="btn">登录</span>
    </div>
    <div class="header-nav">
      <div class="header-box clearfix" >
        <ul>
          <li><span @click="toone('1')" :class="{active:index==1}">推荐</span></li>
          <li><span  @click="totwo('2')" :class="{active:index==2}">居家生活</span></li>
          <li><span @click="tothree('3')" :class="{active:index==3}">鞋饰服包</span></li>
          <li><span @click="tofour('4')" :class="{active:index==4}">美食酒水</span></li>
          <li><span  @click="tofive('5')" :class="{active:index==5}">个人清理</span></li>
          <li><span @click="tosix('6')" :class="{active:index==6}">母婴亲自</span></li>
          <li><span @click="toseven('7')" :class="{active:index==7}">运动旅游</span></li>
          <li><span @click="toeight('8')" :class="{active:index==8}">数码家电</span></li>
          <li><span @click="tonine('9')" :class="{active:index==9}">礼品特色</span></li>
        </ul>
        <div class="icon">
          <img :class ="{on:isShow}" @click="isShow=!isShow" :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png'" alt="展开"/>

        </div>
        <div class="mask" v-show="isShow">
          <p class="channels">全部频道</p>
          <ul class="maskList clearfix" >
            <li><a href="javascript:;" >推荐</a></li>
            <li><a href="javascript:;">居家生活</a></li>
            <li><a href="javascript:;">鞋饰服包</a></li>
            <li><a href="javascript:;">美食酒水</a></li>
            <li><a href="javascript:;">个人清理</a></li>
            <li><a href="javascript:;">母婴亲自</a></li>
            <li><a href="javascript:;">运动旅游</a></li>
            <li><a href="javascript:;">数码家电</a></li>
            <li><a href="javascript:;">礼品特色</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "homeHeader",
    data(){
      return{
        isShow:false,
        index:'1'
      }
    },
    methods:{
      toone(index){
        this.index=index
      },
      totwo(index){
        this.index=index
      },
      tothree(index){
        this.index=index
      },
      tofour(index){
        this.index=index
      },
      tofive(index){
        this.index=index
      },
      tosix(index){
        this.index=index
      },
      toseven(index){
        this.index=index
      },
      toeight(index){
        this.index=index
      },
      tonine(index){
        this.index=index
      },


    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .header
    position fixed
    top 0px
    left 0px
    width 100%
    z-index 1000
    .content
      display flex
      width 100%
      padding 8px 15px
      align-items center

      >img
        width 138px
        height 40px
        margin-right 10px
      .search-box
        display flex
        background-color #eee
        align-items center
        height 56px
        justify-content center
        width 487px
        border-radius 10px
        >img
          width 28px
          height 28px
          display inline-block
          vertical-align middle
        .show
          background-color #eee
          vertical-align middle
          font-size 28px
      .btn
          margin-left 8px
          width 76px
          height 42px
          font-size 24px
          border  1px solid #cc0000
          border-radius 10%
          text-align center
          line-height 42px
    .header-nav
      .header-box
        position relative
        >ul
          float left
          display flex
          >li
            display flex
            width 150px
            box-sizing border-box
            line-height 60px
            padding 0 16px
            justify-content center
            >span
              font-size 28px
              &.active
                color red
                border-bottom  2px solid red

        .icon
          position absolute
          right 0px
          top 0
          width 100px
          height 60px
          background-color white
          z-index 1000
          >img
            width 28px
            height 28px
            padding-left 36px
            padding-top 16px
            transition transition 3000ms linear

            &.on
              transform:rotateZ(180deg)


        .mask

          position absolute
          top 0px
          left 0px
          width 100%
          background-color: #fff
          .channels

            font-size 28px
            padding-left 30px
            height 60px
            line-height 60px
          .maskList


            >li
              float left
              width 165px
              height 64px
              border 2px solid #d9d9d9
              margin 7.5px
              text-align center
              line-height 64px
              -webkit-tap-highlight-color: rgba(125,125,125,0.7)
              >a
                font-size 28px




</style>
