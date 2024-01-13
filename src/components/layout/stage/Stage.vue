<template>
   <section>
    <div class="inner">
      <h1 class="text-center">Willkommen bei AROI!</h1>
      <p>
        Einfach der Place to be für alle Foodies, die es schnell, lecker und
        preiswert lieben – hier bei AROI wird alles frisch & mit Liebe für Dich
        zubereitet.
      </p>
      <div class="text-center">
        <base-button mode="btn--secondary" >Erfahre mehr</base-button>
        <base-button
          link
          :to='test'
          mode="btn--primary"
        >Zur Speisekarte</base-button>
      </div>
      <!-- <img src="../../../assets/img/red-curry.webp" alt="" class="margin-top" loading="lazy" height="1280" width="1920"/> -->
      <img src="../../../assets/img/red-curry.webp" alt="" class="margin-top"/>

    </div>
  </section>
</template>

<script>
export default {
   data() {
    return {
      test: '/menu'
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