<template>
  <section class="stage">
    <div class="inner" :class="{'effect': isMobile}">
      <h1>Willkommen bei AROI!</h1>
      <p class="fade-animation">
        Einfach der Place to be für alle Foodies, die es schnell, lecker und
        preiswert lieben – hier bei AROI wird alles frisch & mit Liebe für Dich
        zubereitet. Alles in einem gemütlichen Ambiente.
      </p>
      <div class="text-center fade-animation">
        <base-button mode="btn--secondary" @click="scrollToTimeLine"
          >Erfahre mehr</base-button
        >
        <base-button link :to="menu" mode="btn--primary"
          >Zur Speisekarte</base-button
        >
        <picture>
            <source
              type="image/webp"
              srcset="
              ../../../assets/img/curry-small.webp 400w,
              ../../../assets/img/curry.webp 600w
            "
              sizes="(max-width: 599px) 300px, 600px"
            />
            <img
              src="../../../assets/img/curry.webp"
              width="400"
              alt=""
              class="margin-top"
            />
          </picture>
      </div>
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
      isMobile: window.innerWidth <= 599,
      menu: "/menu",
    };
  },
  methods: {
    scrollToTimeLine() {
      if (typeof this.scrollToTimeline === "function") {
        this.scrollToTimeline();
      }
    },
  },
  mounted() {
    let timeOut = null;
    this.isMobile ? timeOut = 0 : timeOut = 500
    setTimeout(() => {
      document.querySelectorAll('.stage .fade-animation').forEach(element => {
        element.classList.add('fade-in');
      });
    }, timeOut);
  },
};
</script>

<style lang="scss" scoped>
.stage {
  min-height: 100vh;
}

h1 {
  animation: typing 1s steps(100, end);
  margin-bottom: 0.25em;
  overflow: hidden;
  padding-inline: 10px;
  white-space: nowrap;
  
  @include for-phone-only {
    animation: none;
    text-align: center;
    white-space: unset;
  }
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}


p {
  font-weight: 500;
}

</style>
