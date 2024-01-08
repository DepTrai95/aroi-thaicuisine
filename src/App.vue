<template>
  <HelloWorld msg="Hallo ich bin das Template für alle Websites" />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style lang="scss">
@import './global.scss';

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  background-color: $background-color;
  color: $primary-color;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 10px;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

//delete then
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
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
    padding: 0 140px;
  }

  @include for-desktop-up {
    padding: 0 200px;
  }
}
</style>
