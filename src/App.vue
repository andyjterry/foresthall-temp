<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view />
      <Footer />
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
