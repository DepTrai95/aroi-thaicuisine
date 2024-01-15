<template>
  <section class="timeline inverted">
    <div class="inner">
      <div class="grid--default grid-2--tablet-landscape-up">
        <div class="grid-item center-vertically fade-animation">
          <h2>Discover amazing flavours</h2>
          <p>
            Die thailändische Küche ist bekannt für ihre unglaublichen Gewürze
            und ihren intensiven Geschmack und ihre sensationale Qualität.
          </p>

          <div>
            <base-button link to="/menu" mode="btn--primary"
              >Zur Speisekarte</base-button
            >
          </div>
        </div>
        <div class="grid-item fade-animation" :class="{ 'padding-block': hasTimeline }">
          <Timeline :value="events" align="alternate">
            <template #content="slotProps">
              <Card>
                <template #title>
                  {{ slotProps.item.headline }}
                </template>
                <template #content>
                  {{ slotProps.item.description }}
                </template>
              </Card>
            </template>
          </Timeline>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hasTimeline: true,
      events: [
        {
          headline: "Frische Zutaten",
          description:
            "Wir suchen beim Einkauf unserer Zutaten stets auf beste Qualität.",
        },
        {
          headline: "Exquisite Geschmäcker",
          description:
            "Unsere Köche kombinieren Zutaten, Gewürze zu einer unvergesslichen kulinarischen Erlebnis.",
        },
        {
          headline: "Top Service",
          description:
            "Unsere Service-Mitarbeiter verfügen über langjährige Erfahrung und setzen stets ihr Bestes ein, um einen erstklassigen Service zu bieten.",
        },
        {
          headline: "Entspannte Atmosphäre",
          description:
            "Genieße eine gemütliche und einladene Atmosphäre, welche euren Restaurant-Besuch bereichern wird",
        },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => this.observeElement(entries, observer),
      {
        threshold: [0.7],
      }
    );

    const targetElements = document.querySelectorAll('.timeline .grid-item');

    targetElements.forEach(element => {
      observer.observe(element);
    });
  },
  methods: {
    observeElement(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    },

  },
};
</script>

<style lang="scss">
.center-vertically {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.p-card {
  border-radius: 10px;
  box-shadow: 0px 5px 20px 0px rgba(80, 80, 80, 0.2);
  
  @include for-tablet-portrait-up {
    padding: 1rem;
  }

  &-body {
    text-align: start;
  }

  &-title {
    @include responsive-font-size(1.8rem, 2rem);
  }

  &-content {
    @include responsive-font-size(1.4rem, 1.6rem);
    line-height: 1.4;
  }

  &-title {
    .inverted & {
      color: $color-primary;
    }
  }
}

.p-timeline-event {
  min-height: 150px;

  @include for-phone-only {
    margin: 0 -2rem;
    padding: 0;
  }
}

.p-timeline-event-marker {
  background-color: transparent;
  border-color: $color-primary;
  height: 2em;
  width: 2em;
}
</style>

<style lang="scss" scoped>
.inverted {
  background-color: $color-background-dark;
  color: $color-white;
}

h2 {
  color: $color-primary;
}

.grid-2--tablet-landscape-up > .grid-item {
  @include for-tablet-landscape-only {
    padding-inline: 20px;
  }
}

</style>
