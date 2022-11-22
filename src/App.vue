<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: "App",
  components: { AppHeader, AppMain, AppFooter }
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
  <footer id="site_footer">
    <AppFooter />
  </footer>
  <!-- /#site_footer -->
</template>


<style lang="scss">
@use './assets/scss/variables/variables.scss' as*;
</style>