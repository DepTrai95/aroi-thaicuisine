<template>
  <section>
    <div class="inner">
      <h1 class="text-center">Our Menu</h1>
    </div>
    <div class="inner">
      <div class="text-center">
        <base-button @click="loadMenu" mode="btn--primary" v-show="buttonIsVisible">
          Schau dir unsere Speisekarte an
        </base-button>
        <ProgressSpinner
          v-if="isLoading"
          style="width: 50px; height: 50px; margin-top: 10px"
        />
      </div>
      <div v-if="menuCategory" class="menu">
        <div :key="menuCategory.categories" class="grid--default grid-2--tablet-landscape-up">
          <div v-for="category in menuCategory" :key="category.name" class="menu-item__item-category grid-item">
            <h2>{{ category.name }}</h2>
            <ul>
              <base-menu-item
                v-for="menuItem in category.items"
                :key="menuItem.id"
                :menu-item="menuItem"
                class="menu-list__item"
              ></base-menu-item>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressSpinner from "primevue/progressspinner";
import BaseMenuItem from "../../layout/ui/BaseMenuItem.vue";

export default {
  components: {
    ProgressSpinner,
    BaseMenuItem,
  },
  data() {
    return {
      isLoading: false,
      buttonIsVisible: true,
      menuCategory: null,
    };
  },
  methods: {
    async loadMenu() {
      
      this.buttonIsVisible = false;
      this.isLoading = true;

      try {
        const response = await fetch("/.netlify/functions/api/menu");
        const data = await response.json();
        
        if (data && data[0] && data[0].categories) {
          this.menuCategory = data[0].categories; 

          return data;
        } else {
          console.error("Ungültiges Datenformat:", data);
          throw new Error("Ungültiges Datenformat");
        }
      } catch (error) {
        console.error("Fehler beim Abrufen der Menüdaten:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  @include responsive-font-size(3rem, 4rem);
  font-family: 'Open Sans';
  margin-bottom: 1em;
}
.grid-2--tablet-landscape-up {
  flex-wrap: wrap;

  > .grid-item {
    padding-inline: 30px 0;
  }
}

.menu {
  margin-top: 3em;
}

.menu-item__item-category {
  ul {
    margin: 0;
    padding: 0;
  }
}

.menu-list__item {
  display: list-item;
  list-style: none;
  margin-bottom: 1.5em;
  min-height: 3em;
  padding-inline: 0;
  position: relative;
}

</style>

<style lang="scss">
.menu-list__item {
  &-title {
    margin: 0 0 0.5em 0;
    position: relative;
    width: 100%;
    
    &--title {
      background-color: $color-background;
      position: relative;
      z-index: 5;
    }
  }

  .dots {
    background-image: radial-gradient(circle closest-side, currentColor 99%, transparent 1%);
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 6px 3px;
    bottom: 0;
    display: block;
    height: 3px;
    left: 0;
    margin: 0;
    position: absolute;
    right: 0;
    top: 18px;
    z-index: 1;
  }

  &-description {
    @include responsive-font-size(1.5rem, 1.6rem);
    margin: 0;
  }

  &-price {
    background-color: $color-background;
    font-weight: 500;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5;
  }
}

.p-progress-spinner,
.p-progress-circle,
.p-progress-path {
  color: $color-primary;
}

</style>
