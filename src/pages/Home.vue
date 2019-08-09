<template>
  <homepage>
    <FrontImage />
    <div class="flex-grid">
      <div class="col">
        <!-- <Lotto /> -->
      </div>
      <div class="col">
        <Lotto />
      </div>
      <div class="col">
        <!-- <Lotto /> -->
      </div>
    </div>
    <!-- <CoachInfo /> -->
  </homepage>
</template>

<script>
// import FrontSlider from "../components/FrontSlider";
import FrontImage from "../components/FrontImage";
import Lotto from "../components/Lotto";
import Affiliation from "../components/Affiliation";
// import CoachInfo from "../components/CoachInfo";

export default {
  name: "app",
  components: {
    // FrontSlider,
    FrontImage,
    Lotto,
    Affiliation
    // CoachInfo
  }
};
</script>

<style>
</style>
