<template>
  <div class="header-wrap">
    <header>
      <LogoText />
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/coaches">Coaches</router-link>
        <router-link to="/">Teams</router-link>
        <router-link to="/">Contact</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
import LogoText from "../components/LogoText";

export default {
  name: "app",
  components: {
    LogoText
  }
};
</script>
<style >
</style>

