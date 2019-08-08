<template>
  <div id="app">
    <div class="container">
      <!-- <div id="app" style="
      margin-top: -5vh;">-->
      <Header />
      <router-view />
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
</style>
