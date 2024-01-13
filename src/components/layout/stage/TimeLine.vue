<template>
  <section>
    <div class="inner">
      <div class="grid--default grid-2--tablet-landscape-up">
        <div class="grid-item center-vertically">
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
        <div class="grid-item" :class="{ 'margin-top': hasTimeline }">
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

  &-title {
    @include responsive-font-size(1.8rem, 2rem);
  }

  &-content {
    @include responsive-font-size(1.4rem, 1.6rem);
    line-height: 1.4;
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
  border-color: $color-primary;
  height: 2em;
  width: 2em;
}
</style>

<style scoped></style>
