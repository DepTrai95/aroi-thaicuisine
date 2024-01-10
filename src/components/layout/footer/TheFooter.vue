<template>
  <footer class="footer">
    <!-- Adresse und Öffnungszeiten -->
    <div class="footer-content">
      <div class="footer-content_info">
        <h4>AROI - Thai Cuisine</h4>
        <p>Louisenstraße 30<br />01099 Dresden</p>
      </div>
      <div class="footer-content_info">
        <h4>Öffnungszeiten:</h4>
        <p>Mo. - Fr.:<br />11:30 - 14:00 Uhr<br />17:00 - 22:00 Uhr</p>
        <p>Sa., So., Feiertage:<br />11:30 - 22:00 Uhr</p>
      </div>
    </div>

    <!-- Social Media und Impressum -->
    <ul class="footer-links">
        <LinkRouter link="/impressum" label="Impressum" />
        <LinkRouter link="/menu" label="Menu" />
      <li>
        <a href="https://www.facebook.com/p/Aroi-Thai-Cuisine-100078777161780/"
          >Aroi on Facebook</a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
import LinkRouter from '../link/LinkRouter.vue';
 
export default {
   components: {
      LinkRouter,
   },
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-background-dark;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

.footer-content {
  @include responsive-font-size(1.8rem, 2rem);
  margin: 0 auto;
  padding-block: 3.5em;
}

.footer-links {
  background-color: $color-body;
  margin: 0;
  padding: 2em 0;
  text-align: center;

  a {
    color: #fff;
    position: relative;
    text-decoration: none;
  }

  @include for-tablet-portrait-up {
    li {
      &:nth-child(n + 2) {
        position: relative;
        &::before {
          content: "\2022";
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-5px, 50%); //-5px for perfect center
        }
      }
    }
  }
}
</style>
