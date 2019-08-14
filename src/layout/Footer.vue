<template>
  <footer>
    <div class="footer-container">
      <div class="footer-col-2">
        <h1>Forest Hall Juniors</h1>
        <p>Forest Hall Juniors has proven to be a very successful Club in all areas of its work over previous years, and this coupled with the commitment and ambition of its many volunteers ensures the Club will strive for continuous improvement in the future.</p>
      </div>
      <div class="footer-col-1">
        <h2>Pages</h2>
        <ul>
          <li>About Us</li>
          <li>Our Volunteers</li>
          <li>Our Teams</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div class="footer-col-1">
        <h2>Info</h2>
        <ul>
          <li>
            <a href="#">Join a Team</a>
          </li>
          <li>
            <a href="#">Volunteer</a>
          </li>
          <li>
            <a href="#">Sponsorship</a>
          </li>
          <li>
            <a href="#">Our Constitution</a>
          </li>
          <li>
            <a
              href="http://www.northumberlandfa.com/about/rules-and-regulations/safeguarding-and-welfare/policies"
              target="_blank"
            >FA Policies</a>
          </li>
        </ul>
      </div>
      <div class="footer-col-1">
        <h2>Senior Teams</h2>
        <ul>
          <li>Forest Hall Seniors</li>
          <li>Forest Hall over 40's</li>
        </ul>
      </div>
      <div class="footer-col-2">
        <h2>Contact</h2>
        <p>Palm Ct, Palmersville, Newcastle upon Tyne NE12 9HF</p>
        <p>0191 2160308</p>
        <p>info@foresthalljuniors.co.uk</p>
        <ul class="findusonline">
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>

    <div
      class="footer-bottom"
    >Copyright of Forest Hall Juniors 1996 - 2019 | Designed and Developed by Andy Terry</div>
  </footer>

  <!-- Site footer -->
  <!-- <footer>

  </footer>-->
</template>

<script>
// import Sponsors from "../components/Sponsors";

export default {
  name: "app",
  components: {
    // Sponsors
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "montserrat";
  line-height: calc(1rem + 0.25vw);
}

.flex {
  display: flex;
  justify-content: start;
  position: relative;
  margin-right: 10px;
}

footer {
  background: #111;
  color: white;
  padding: 4vw 10vw 0 10vw;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      background: white;
      color: firebrick;
      font-weight: 900;
      padding: 0 2px 0 2px;
    }
  }

  .footer-container {
    display: flex;
    flex-direction: row;
    // justify-content: space-evenly;
    justify-content: space-between;
    padding: 2px;

    h1 {
      padding-bottom: 10px;
    }

    h2 {
      padding-bottom: 10px;
    }

    ul {
      list-style: none;

      li {
      }
    }

    .footer-col-1 {
      // border: 1px solid #fff;
      // background-color: #D6E9FE;
      height: 200px;
      flex: 1;
    }

    .footer-col-2 {
      // border: 1px solid #fff;
      // background-color: #D6E9FE;
      // height: 200px;
      flex: 2;
    }

    .findusonline {
      display: flex;
      justify-content: start;
      position: relative;
      margin-right: 10px;
    }
  }

  .footer-bottom {
    background: #101010;
    color: firebrick;
    text-align: center;
    padding: 20px;
  }
}

@media screen and (max-width: 575px) {
  .footer-container {
    display: block;
    flex-direction: column;
  }
}
</style>

