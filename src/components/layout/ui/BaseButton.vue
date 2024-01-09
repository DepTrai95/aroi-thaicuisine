<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
      <slot></slot>
    </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: "",
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  align-items: center;
  display: inline-flex;
  text-decoration: none;
}

.btn--primary,
.btn--secondary {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0px 15px 20px 10px rgba(80, 80, 80, 0.2);
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  //font-weight: 500;
  height: unset !important;
  line-height: 1.3;
  margin-block: 1rem;
  min-height: 3em;
  padding: 8px 1.5em;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0px 15px 20px 5px rgba(80, 80, 80, 0.3);
  }

  + .btn--primary,
  + .btn--secondary {
    margin-inline: 2rem;
  }
}

.btn--primary {
  background-color: $color-primary;
  color: $color-white;
}
</style>
