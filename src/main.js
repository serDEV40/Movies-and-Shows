import './assets/main.css';
import App from './App.vue';
import { createApp } from 'vue';
import { routers } from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

createApp(App).use(routers).component('font-awesome-icon', FontAwesomeIcon).mount('#app')