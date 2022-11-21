<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: "App",
  components: { AppHeader, AppMain }
}
</script>

<template>
  <header id="site_header">
    <AppHeader />
  </header>
  <!-- /#site_header -->
  <main id="site_main">
    <AppMain />
  </main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>
  <!-- /#site_footer -->
</template>


<style lang="scss">

</style>