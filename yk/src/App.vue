<template>
  <div id="app">
    <router-view></router-view>
    <footer-nav v-show="$route.meta.showfoot"></footer-nav>
  </div>
</template>

<script>
  import footerNav from './components/footerNav/footerNav.vue'
export default {
  name: 'App',
  components:{
    "footer-nav":footerNav,


  },
  mounted(){
    this.$store.dispatch('gethomedata')
  }


}
</script>

<style>
#app {

}
</style>
