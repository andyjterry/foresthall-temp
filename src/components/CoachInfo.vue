<template>
  <div class="coachestable">
    <h1>Forest Hall Coaches List</h1>
    <h2>
      If you cannot find who you are looking for. Contact
      <a
        href="mailto:sam.corbett@foresthalljuniors.co.uk"
      >Sam</a>.
    </h2>

    <table class="container table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th v-column-sortable:age>Age</th>
          <th>Team</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d,index) in dataArray" :key="index">
          <td>{{ d.name }}</td>
          <td>u{{ d.age }}</td>
          <td>{{ d.team }}</td>
          <td>{{ d.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import columnSortable from "vue-column-sortable";

export default {
  data() {
    return {
      dataArray: [
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
  },
  methods: {
    orderBy(fn) {
      this.dataArray.sort(fn);
    }
  },
  directives: {
    columnSortable
  }
};
</script>

<style scoped>
.table {
  border-radius: 57px;
}

th {
  font-size: 1.5vw;
}

/* .coachestable {
    position: relative;
    top: 42vh;
    font-size: 1vw !important;
    font-family: "Montserrat";
    font-weight: 600;
  } */
h1 {
  font-size: 3em;
  font-weight: 300;
  line-height: 1em;
  text-align: center;
  color: white;
}

h2 {
  font-size: 1em;
  font-weight: 300;
  text-align: center;
  display: block;
  line-height: 1em;
  padding-bottom: 2em;
  color: white;
}

h2 a {
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
}

.container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  /* color: #185875; */
}

.container td {
  font-weight: normal;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
}

.container {
  text-align: center;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container td,
.container th {
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
  background-color: #323c50;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
  background-color: #2c3446;
}

.container th {
  background-color: firebrick;
}

.container td:first-child {
  color: white;
}

.container tr:hover {
  background-color: firebrick;
  -webkit-box-shadow: 0 6px 6px -6px #0e1119;
  /* -moz-box-shadow: 0 6px 6px -6px #0E1119;
            box-shadow: 0 6px 6px -6px #0E1119; */
}

@media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) {
    display: none;
  }
}
</style>
