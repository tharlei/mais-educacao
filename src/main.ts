import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import { router } from './routes';
import Maska from 'maska';

loadFonts();

createApp(App).use(vuetify).use(Maska).use(router).mount('#app');
