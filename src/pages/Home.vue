<template>
  <homepage>
    <div class="front-slider">
      <FrontImage />
    </div>

    <!-- <FrontSlider /> -->
    <div class="coachestable">
      <CoachInfo />
    </div>
    <div class="affiliation">
      <Affiliation />
    </div>
  </homepage>
</template>

<script>
// import FrontSlider from "../components/FrontSlider";
import FrontImage from "../components/FrontImage";
import Affiliation from "../components/Affiliation";
import CoachInfo from "../components/CoachInfo";

export default {
  name: "app",
  components: {
    // FrontSlider,
    FrontImage,
    Affiliation,
    CoachInfo
  }
};
</script>

<style>
</style>
