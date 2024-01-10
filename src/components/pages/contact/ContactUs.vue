<template>
  <section>
    <div class="inner">
      <h1 class="text-center">Contact Us</h1>
    </div>
  </section>
  <section>
    <div class="inner">
      <div class="grid--default grid-2--tablet-landscape-up">
        <div class="grid-item">
          <h2>BOOK A TABLE</h2>
          <!-- <h1>Kontaktformular</h1> -->
          <p class="reservation-info">
            Wir nehmen jeden Tag gerne Reservierungen entgegen und sind zu
            unseren Öffnungszeiten:
            <span>{{ lunchTime }}</span>
            <span>{{ dinnerTime }}</span>
            telefonisch erreichbar unter:
            <li>
              <a class="link" :href="'tel:' + phoneNumber">{{ phoneNumber }}</a>
            </li>
          </p>
        </div>
        <div class="grid-item">
          <contact-form></contact-form>
        </div>
      </div>
    </div>
  </section>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.link {
  width: 100%;
}
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
