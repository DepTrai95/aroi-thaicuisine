<template>
  <the-header />
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in" @before-enter="beforeEnter">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
  <the-footer />
</template>

<script setup>
import TheHeader from "./components/layout/header/TheHeader.vue";
import TheFooter from "./components/layout/footer/TheFooter.vue";
</script>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.scrollTop = 0;
      if (el.scrollTop !== 0) {
      }
    }
  }
};
</script>

<style lang="scss">
section {
  margin-bottom: 4em;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: opacity 0.15s ease-out, transform 0.15s ease-out;
}

.route-leave-active {
  transition: opacity 0.15s ease-in, transform 0.15s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
