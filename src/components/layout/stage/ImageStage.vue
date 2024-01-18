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
      <div class="img-container--element">
        <picture>
          <source
            type="image/webp"
            srcset="
              ../../../assets/img/pad-thai-small.webp 400w,
              ../../../assets/img/pad-thai.webp 600w
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
      <div class="img-container--element">
        <picture>
          <source
            type="image/webp"
            srcset="
              ../../../assets/img/red-curry-small.webp 400w,
              ../../../assets/img/red-curry.webp 600w
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
      <div class="img-container--element">
        <picture>
          <source
            type="image/webp"
            srcset="
              ../../../assets/img/crispy-duck-small.webp 400w,
              ../../../assets/img/crispy-duck.webp 600w
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
      isMobile: window.innerWidth <= 599,
    };
  },
  mounted() {
    const observerText = new IntersectionObserver(
      (entries) => this.observeElement(entries, "section-header", observerText),
      {
        threshold: [0.7],
      }
    );

    const observerImage = new IntersectionObserver(
      (entries) => this.observeElement(entries, "img-container", observerImage),
      {
        threshold: this.isMobile ? [0.1] : [0.5],
      }
    );

    const targetText = document.querySelector(".section-header");
    observerText.observe(targetText);

    if (this.isMobile) {
      const targetImages = document.querySelectorAll(".img-container--element");

      targetImages.forEach((element) => {
        observerImage.observe(element);
      });
    } else {
      const targetImages = document.querySelector(".img-container");
      observerImage.observe(targetImages);
    }
  },
  methods: {
    observeElement(entries, targetName, observerInstance) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (targetName === "img-container") {
            this.isMobile
              ? entry.target.classList.add("fade-in")
              : entry.target
                  .querySelectorAll(".img-container--element")
                  .forEach((element) => {
                    element.classList.add("fade-in");
                  });
          } else if (targetName === "section-header") {
            entry.target.classList.add("fade-in");
          }

          observerInstance.unobserve(entry.target);
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
    transition: transform 0.5s ease-in, opacity 1s ease-in;

    &:nth-child(1) {
      transform: translate(0, 50%);

      @include for-tablet-portrait-up {
        transform: translate(-100%, 0);
      }
    }

    &:nth-child(2) {
      transform: translate(0, 50%);

      @include for-tablet-portrait-up {
        transform: translate(0, 33%);
      }
    }

    &:nth-child(3) {
      transform: translate(0, 50%);

      @include for-tablet-portrait-up {
        transform: translate(100%, 0);
      }
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
