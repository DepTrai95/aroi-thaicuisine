import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import Button from './components/layout/ui/BaseButton.vue';

// PrimeVue Testing
import "primeicons/primeicons.css";
import 'primevue/resources/themes/lara-light-amber/theme.css';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Timeline from 'primevue/timeline';

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {});

app.component('Card', Card);
app.component('Timeline', Timeline);
app.component('base-button', Button);

app.mount('#app')
