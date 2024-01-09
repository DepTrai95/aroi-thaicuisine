<template>
  <li class="">
    <router-link :to="link">{{ label }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

li {
  padding-inline: 2rem;
  text-align: center;
  display: inline-flex;

  a {
    color: inherit;
    line-height: 1.3;
    overflow: hidden;
    padding-block: 1rem;
    position: relative;
    text-decoration-line: none;
    transition: color 0.2s ease-in;

    &:hover {
      color: $color-primary;
    }

    &::before {
      border: 1px solid currentColor;
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      transform-origin: center left;
      transform: scale3d(0, 1, 1);
      transition-delay: 3s;
      transition: transform .3s cubic-bezier(.22, .61, .36, 1);
      width: 0;
    }

    &:hover::before,
    &:focus::before {
      transition-delay: 0s;
      transform: scale3d(1, 1, 1);
      width: 100%;
    }
  }

  .active-route {
    //wie löst man das mit den routes
    font-weight: 500;
  }
}
</style>
