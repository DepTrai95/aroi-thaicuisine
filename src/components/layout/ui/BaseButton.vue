<template>
  <button :class="mode">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: "",
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../global.scss";

.btn--primary,
.btn--secondary {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0px 15px 20px 10px rgba(80, 80, 80, 0.2);
  cursor: pointer;
  font-size: inherit;
  //font-weight: 500;
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
