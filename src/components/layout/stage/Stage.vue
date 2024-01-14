<template>
   <section>
    <div class="inner">
      <h1 class="text-center">Willkommen bei AROI!</h1>
      <p>
        Einfach der Place to be für alle Foodies, die es schnell, lecker und
        preiswert lieben – hier bei AROI wird alles frisch & mit Liebe für Dich
        zubereitet. Alles in einem gemütlichen Ambiente.
      </p>
      <div class="text-center">
        <base-button mode="btn--secondary" @click="scrollToTimeLine" >Erfahre mehr</base-button>
        <base-button
          link
          :to='menu'
          mode="btn--primary"
        >Zur Speisekarte</base-button>
      </div>
      <img src="../../../assets/img/curry.webp" alt="" width="600" class="margin-top"/>

    </div>
  </section>
</template>

<script>
export default {
  props: {
    scrollToTimeline: Function,
  },

   data() {
    return {
      menu: '/menu'
    }
   },
   methods: {
    scrollToTimeLine() {
      if (typeof this.scrollToTimeline === "function") {
        this.scrollToTimeline();
      }
    }
   }
}
</script>

<style scoped>
h1 {
  margin-bottom: 0.25em;
}

p {
  font-weight: 500;
}
</style>