<template>
  <div id="app">
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import footerNav from './components/footerNav/footerNav.vue'
export default {
  name: 'App',
  components:{
    "footer-nav":footerNav,


  }
}
</script>

<style>
#app {

}
</style>
