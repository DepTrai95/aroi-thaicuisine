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
                  <LinkRouter link="/" label="Home" />
                  <LinkRouter link="/menu" label="Menu" />
                  <LinkRouter link="/contact" label="Contact" />
               </ul>
            </nav>
         </div>
      </div>
   </header>
</template>

<script>
import LinkRouter from '../link/LinkRouter.vue';

export default {
   components: {
      LinkRouter,
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

.nav-main {
   li {
      padding-inline: 2rem;
      text-align: center;
   }
}
</style>