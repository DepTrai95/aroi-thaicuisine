import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import Home from "./components/pages/home/Home.vue";
import OurMenu from "./components/pages/menu/OurMenu.vue";
import ContactUs from "./components/pages/contact/ContactUs.vue";
import NotFound from "./components/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/menu", component: OurMenu },
    { path: "/contact", component: ContactUs },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
