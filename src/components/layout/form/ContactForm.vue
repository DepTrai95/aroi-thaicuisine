<template>
  <form @submit.prevent="submitForm">
    <div class="form-group" :class="{ invalid: !name.isValid }">
      <label for="name">
        Name <abbr title="Pflichtfeld">*</abbr>
      </label>
      <input
        class="form-control"
        type="text"
        id="name"
        v-model.trim="name.val"
        @blur="clearValidity('name')"
        placeholder="Name"
      />
      <p v-if="!name.isValid" :class="{ invalid: !message.isValid }">
        Bitte geben Sie Ihren Namen an.
      </p>
    </div>
    <div class="form-group" :class="{ invalid: !email.isValid }">
      <label for="email">
        E-Mail <abbr title="Pflichtfeld">*</abbr>
      </label>
      <input
        class="form-control"
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
        placeholder="E-Mail"
      />
      <p v-if="!email.isValid" :class="{ invalid: !message.isValid }">
        Das E-Mail Feld darf nicht leer sein!
      </p>
    </div>
    <div class="form-group" :class="{ invalid: !message.isValid }">
      <label for="message">
        Nachricht <abbr title="Pflichtfeld">*</abbr>
      </label>
      <textarea
        class="form-control"
        id="message"
        rows="10"
        v-model.trim="message.val"
        @blur="clearValidity('message')"
        placeholder="Ihre Nachricht"
      ></textarea>
      <p v-if="!message.isValid" :class="{ invalid: !message.isValid }">
        Nachricht darf nicht leer sein
      </p>
    </div>

    <p v-if="!formIsValid">Bitte überprüfen Sie noch einmal ihre Angaben.</p>
    <base-button
      mode="btn--primary"
    >Nachricht abschicken</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      name: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      message: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "" || !this.email.includes('@') || this.email.val < 8) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val === "") {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        name: this.name.val,
        email: this.email.val,
        message: this.message.val,
      };

      //this.$emit("save-data", formData);
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "./../../../assets/styling/base.scss";

.form-group {
  margin-bottom: 2rem;
}

.form-control {
  border: 2px solid transparent;
  border-radius: 4px;
  display: block;
  color: $color-body;
  font-family: inherit;
  font-size: 1.6rem;
  min-height: 5rem;
  line-height: 1.3;
  padding: 1rem 2rem;
  transition: background-color 0.3s, border-color 0.3s;
  width: 100%;

  &:hover,
  &:focus { 
    border-color: $color-primary;
  }

  &:focus {
    background-color: $color-background;
  }
}

label {
  color: $color-body;
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.invalid {
  label,
  p {
    color: $color-error;
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }

  input,
  textarea {
    border: 1px solid $color-error;
  }
}
</style>
