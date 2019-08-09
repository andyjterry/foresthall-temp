<template>
  <!-- <div class="header-wrap"> -->
  <header>
    <LogoText />
    <Navigation />
  </header>
  <!-- </div> -->
</template>

<script>
import LogoText from "../components/LogoText";
import Navigation from "./Navigation";

export default {
  name: "app",
  components: {
    LogoText,
    Navigation
  }
};
</script>
<style >
</style>

