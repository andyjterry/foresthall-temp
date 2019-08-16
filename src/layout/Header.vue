<template>
  <header>
    <LogoText />
    <Navigation />
  </header>
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
<style scoped>
</style>

