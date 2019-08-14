<template>
  <homepage>
    <FrontImage />

    <div class="flex-grid bottom-shadow">
      <div class="col">
        <TeamVacancy />
      </div>
      <div class="col">
        <Lotto />
      </div>
      <div class="col">
        <Affiliation />
      </div>
    </div>
    <Joinus />
    <CoachInfo />
  </homepage>
</template>

<script>
// import FrontSlider from "../components/FrontSlider";
import FrontImage from "../components/FrontImage";
import Lotto from "../components/Lotto";
import Affiliation from "../components/Affiliation";
import TeamVacancy from "../components/TeamVacancy";
import CoachInfo from "../components/CoachInfo";
import Joinus from "../components/Joinus";

export default {
  name: "app",
  components: {
    // FrontSlider,
    FrontImage,
    TeamVacancy,
    Lotto,
    Affiliation,
    Joinus,
    CoachInfo
  }
};
</script>

<style>
</style>
