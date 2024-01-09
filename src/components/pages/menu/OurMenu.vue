<template>
  <div class="inner">
    <h1 class="text-center">Our Menu</h1>
  </div>
  <div class="inner">
    <div class="text-center">
      <base-button mode="btn--primary">Schau dir unsere Speisekarte an</base-button>
    </div>
  </div>
</template>

<script>
import ProgressSpinner from "primevue/progressspinner";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style lang="scss"></style>
