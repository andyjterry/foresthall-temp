<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
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
