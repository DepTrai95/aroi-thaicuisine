<template>
  <div>
    <stage :scrollToTimeline="scrollToTimeline" />
    <time-line id="timeline"></time-line>
    <image-stage></image-stage>
  </div>
</template>

<script>
import Stage from "../../layout/stage/Stage.vue";
import TimeLine from "../../layout/stage/TimeLine.vue";
import ImageStage from "../../layout/stage/ImageStage.vue";

export default {
  components: {
    Stage,
    TimeLine,
    ImageStage,
  },
  methods: {
    scrollToTimeline() {
       const timelineElement = document.getElementById("timeline");
      if (timelineElement) {
        timelineElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss"></style>
