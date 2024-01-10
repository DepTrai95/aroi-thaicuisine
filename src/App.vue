<template>
  <the-header />
  <main>
    <router-view />
  </main>
  <the-footer />
</template>

<script setup>
import TheHeader from './components/layout/header/TheHeader.vue';
import TheFooter from './components/layout/footer/TheFooter.vue';
</script>

<style lang="scss">
section {
  margin-bottom: 5em;
}
</style>
