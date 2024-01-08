<template>
  <the-header />
  <router-view />
</template>

<script setup>
import TheHeader from './components/layout/header/TheHeader.vue';
</script>

<style lang="scss">
@import './global.scss';

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  background-color: $background-color;
  color: $color-primary;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 10px;
}

body {
  @include responsive-font-size(1.8rem, 2.2rem);
  font-weight: 400;
  margin: 0;
  padding: 0;
}

main {
  overflow: hidden;
}

.inner {
  margin: 0 auto;
  max-width: $content-max-width - (2 * $content-padding);
  padding: 0 20px;

  @include for-tablet-portrait-up {
    padding: 0 40px;
  }

  @include for-tablet-landscape-up {
    padding: 0 60px;
  }

  @include for-desktop-up {
    padding: 0 80px;
  }
}

img {
  width: 100%;
}
</style>
