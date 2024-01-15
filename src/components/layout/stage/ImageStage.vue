<template>
  <section>
    <div class="section-header fade-animation">
      <h2>Feel the good vibes</h2>
      <p>
        Komme mit Freunden und Familie und erlebe die Thai-Küche wie noch nie
        zuvor!
      </p>
      <p>
        Genussvolles Mittagessen, die dir einen Energieschub für den Rest des
        Tages geben. Fantastische Hauptgerichte, die du unbedingt probieren
        musst!
      </p>
    </div>

    <div class="img-container">
      <div class="img-container--element" :class="{ 'fade-in': fadeIn }">
        <picture>
          <source
            type="image/webp"
            srcset="
              ../../../assets/img/pad-thai.webp     400w,
              ../../../assets/img/pad-thai-med.webp 600w
            "
            sizes="(max-width: 599px) 300px, 600px"
          />
          <img
            src="../../../assets/img/pad-thai.webp"
            width="400"
            height="600"
            alt=""
            loading="lazy"
          />
        </picture>
      </div>
      <div class="img-container--element" :class="{ 'fade-in': fadeIn }">
        <picture>
          <source
            type="image/webp"
            srcset="
              ../../../assets/img/red-curry.webp     400w,
              ../../../assets/img/red-curry-med.webp 600w
            "
            sizes="(max-width: 599px) 300px, 600px"
          />
          <img
            src="../../../assets/img/red-curry.webp"
            width="400"
            height="600"
            alt=""
            loading="lazy"
          />
        </picture>
      </div>
      <div class="img-container--element" :class="{ 'fade-in': fadeIn }">
        <picture>
          <source
            type="image/webp"
            srcset="
              ../../../assets/img/crispy-duck.webp     400w,
              ../../../assets/img/crispy-duck-med.webp 600w
            "
            sizes="(max-width: 599px) 300px, 600px"
          />
          <img
            src="../../../assets/img/crispy-duck.webp"
            width="400"
            height="600"
            alt=""
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fadeIn: false,
    };
  },
  mounted() {
    const observerText = new IntersectionObserver(
      (entries) => this.observeElement(entries, 'section-header'),
      {
        threshold: [0.7],
      }
    );

    const observerImage = new IntersectionObserver(
      (entries) => this.observeElement(entries, 'img-container'),
      {
        threshold: [0.5],
      }
    );

    const targetText = document.querySelector(".section-header");
    const targetImages = document.querySelector('.img-container');
    observerText.observe(targetText);
    observerImage.observe(targetImages);
  },
  methods: {
    observeElement(entries, targetName) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (targetName === 'img-container') {
            entry.target.querySelectorAll(".img-container--element").forEach(element => {
              element.classList.add("fade-in");
            });
          } else if (targetName === 'section-header') {
            entry.target.classList.add("fade-in");
          }

          if (targetName === 'text') {
            observerText.unobserve(entry.target);
          } else if (targetName === 'image') {
            observerImage.unobserve(entry.target);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 0;
}
.section-header {
  margin: 3.5em auto;
  padding: 0 20px;

  @include for-tablet-portrait-up {
    width: 400px;
  }

  @include for-tablet-landscape-up {
    width: 500px;
  }

  @include for-desktop-up {
    width: 600px;
  }

  p {
    @include responsive-font-size(1.8rem, 2rem);
  }
}

.img-container {
  @include for-tablet-portrait-up {
    display: flex;
  }

  &--element {
    margin: 0 auto;
    max-width: 400px;
    opacity: 0;
    transition: transform .5s ease-in, opacity 1s ease-in;
    
    &:nth-child(1) {
      transform: translate(-100%, 0);
    }
  
    &:nth-child(2) {
      transform: translate(0, 33%);
    }
  
    &:nth-child(3) {
      transform: translate(100%, 0);
    }

    @include for-tablet-portrait-up {
      max-width: 100%;
      width: 33%;
    }
  }
  .fade-in {
    opacity: 1;
    transform: translate(0, 0);
  }
  
  img {
    height: auto;
  }
}

</style>
