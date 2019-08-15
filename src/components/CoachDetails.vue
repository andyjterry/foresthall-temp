<template>
  <div class="coachesdetailpage">
    <h1>Forest Hall Coaches List</h1>
    <h2>
      If you cannot find who you are looking for. Contact
      <a
        href="mailto:sam.corbett@foresthalljuniors.co.uk"
      >Sam</a>.
    </h2>

    <div class="coachdetails">
      <div class="coachdetail" v-for="(d,index) in dataArray" :key="index">
        <img src="/src/assets/img/blank.png" alt srcset />
        <h3>u{{ d.age }} {{ d.team }}</h3>
        <p>{{ d.name }}</p>
        <p>{{ d.phone }}</p>
        <a :href="`tel:${d.phone}`">
          <button id="hidedesktop">CALL</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataArray: [
        {
          name: "Sam",
          age: 7,
          team: "Pumas",
          phone: "07805794983"
        },
        {
          name: "Nicola",
          age: 8,
          team: "",
          phone: "07590027789"
        },
        {
          name: "James",
          age: 9,
          team: "",
          phone: "07904255840"
        },
        {
          name: "Michael",
          age: 10,
          team: "Crusaders",
          phone: "07784093781"
        },
        {
          name: "Josh",
          age: 10,
          team: "Strikers",
          phone: "07932798228"
        },
        {
          name: "Dave",
          age: 11,
          team: "Avengers",
          phone: "07912 75446"
        },
        {
          name: "Dave",
          age: 11,
          team: "Pumas",
          phone: "07912 75446"
        },
        {
          name: "Andy Terry",
          age: 12,
          team: "Lions",
          phone: "07447460461"
        },
        {
          name: "Steve Jamieson",
          age: 12,
          team: "Lions",
          phone: "07305429345"
        },
        {
          name: "Paul",
          age: 12,
          team: "Phantoms",
          phone: "07568326676"
        },
        {
          name: "Anth",
          age: 12,
          team: "Wolverines",
          phone: "07708383333"
        },
        {
          name: "Steve",
          age: 13,
          team: "Scorpions",
          phone: "07891664941"
        },
        {
          name: "Kev",
          age: 14,
          team: "Falcons",
          phone: "07891762140"
        },
        {
          name: "Gary",
          age: 15,
          team: "Reds",
          phone: "07805294838"
        },
        {
          name: "Phil",
          age: 16,
          team: "Red Devils",
          phone: "07866507888"
        },
        {
          name: "Ian",
          age: 17,
          team: "",
          phone: "07815677031"
        },
        {
          name: "Marc",
          age: 18,
          team: "Girls",
          phone: "07834959817"
        },
        {
          name: "Darren",
          age: "",
          team: "Forest Hall F.C",
          phone: "07803348327"
        },
        {
          name: "Steve",
          age: "",
          team: "Over 40's",
          phone: "07305429345"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
