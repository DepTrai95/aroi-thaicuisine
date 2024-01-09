import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import PrimeVue from 'primevue/config';
// import Button from 'primevue/button';
import Button from './components/layout/ui/BaseButton.vue';
// import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';


const app = createApp(App);
app.use(router);
app.use(PrimeVue);

app.component('base-button', Button);

app.mount('#app')
