<template>
  <div id="app">
    <Header />

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default {
  components: {
    Header,
    Header
  }
};
</script>

<style lang="scss">
</style>
