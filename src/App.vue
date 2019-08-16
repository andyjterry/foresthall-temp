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
      <MobileHeader />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import MobileHeader from "./components/MobileHeader";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default {
  components: {
    MobileHeader,
    Header,
    Footer
  }
};
</script>

<style lang="scss">
</style>
