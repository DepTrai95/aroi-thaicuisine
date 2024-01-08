<template>
   <header class="header">
      <div class="inner">
         <div class="logo__container">
            <div class="logo">
               <router-link to="/">
                  <img src="../../../assets/img/aroi.jpeg" alt="zur Startseite" height="80" width="80">
               </router-link>
            </div>
         </div>
         <div class="nav-main__wrapper">
            <nav class="nav-main">
               <ul class="list--unstyled">
                  <NavItem link="/home" label="Home" />
                  <NavItem link="/menu" label="Menu" />
                  <NavItem link="/contact" label="Contact" />
               </ul>
            </nav>
         </div>
      </div>
   </header>
</template>

<script>
import NavItem from '../navbar/NavItem.vue';

export default {
   components: {
      NavItem,
   },
}
</script>

<style lang="scss" scoped>

.header  {

   padding: 1rem;

   .inner {
      display: flex;
      justify-content: space-between;
   }
}
.logo__container {
   width: auto;

   .logo a {
      display: block;
   }
}

.nav-main__wrapper {
   display: flex;
   justify-content: flex-end;
   align-items: center;
}
</style>