<template>
  <div>
    <section>
      <div class="inner">
        <h1 class="text-center">Contact Us</h1>
      </div>
    </section>
    <section>
      <div class="inner">
        <div class="grid--default grid-2--tablet-landscape-up">
          <div class="grid-item">
            <h2>Book a Table</h2>
            <p class="reservation-info">
              Wir nehmen jeden Tag gerne Reservierungen entgegen und sind zu
              unseren Öffnungszeiten:
              <span>{{ lunchTime }}</span>
              <span>{{ dinnerTime }}</span>
              <span>telefonisch erreichbar unter:</span>
              <a class="link" :href="'tel:' + phoneNumber" style="margin: 0; padding: 0;">{{ phoneNumber }}</a>
              <span>oder direkt über Mail an (aktuell hat das Formular noch Probleme)</span>
              <a class="link" :href="'mailto:' + mailTo" style="margin: 0; padding: 0;">{{ mailTo }}</a>
            </p>
          </div>
          <div class="grid-item">
            <contact-form></contact-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from "../../layout/form/ContactForm.vue";


export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      phoneNumber: "0351 31299599",
      lunchTime: "11:30 - 14:30",
      dinnerTime: "17:00 - 22:00",
      mailTo: "info@aroi-dresden.de"
    };
  },
};
</script>

<style lang="scss" scoped>

.reservation-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.reservation-info span {
  display: block;
  margin-block: 1.5rem;
  width: 100%;

  + span {
    margin-block-start: 0;
  }
}
</style>
