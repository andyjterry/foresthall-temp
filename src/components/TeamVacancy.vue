<template>
  <div class="teamvacancy">
    <div class="vacancy-header">
      <h1>Looking To Join a Team</h1>
      <p>We have spaces in the following teams.</p>
    </div>
    <ul v-for="(d,index) in dataArray" :key="index">
      <a :href="`tel:${d.phone}`">
        <li>u{{ d.age }} {{ d.team }}'s : {{ d.fname}} {{ d.phone }}</li>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataArray: [
        {
          fname: "Steve",
          sname: "Jamieson",
          age: 12,
          team: "Phantom",
          phone: "07305429345"
        },
        {
          fname: "Andy",
          sname: "Terry",
          age: 12,
          team: "Lion",
          phone: "07447460461"
        },
        {
          fname: "Nicola",
          sname: "Chapman",
          age: 8,
          team: "",
          phone: "07590027789"
          // },
          // {
          //   fname: "Andy",
          //   sname: "Terry",
          //   age: 12,
          //   team: "Lions",
          //   phone: "07447460461"
          // },
          // {
          //   fname: "Steve",
          //   sname: "Jamieson",
          //   age: 12,
          //   team: "Phantoms",
          //   phone: "07305429345"
          // },
          // {
          //   fname: "Andy",
          //   sname: "Terry",
          //   age: 12,
          //   team: "Lions",
          //   phone: "07447460461"
        }
      ]
    };
  }
};
</script>

<style>
</style>
