import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";
import router from '@/router/router.vue'
import { createAuth0 } from "@auth0/auth0-vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'primeicons/primeicons.css'
import FlagIcon from 'vue-flag-icon'
import i18n from '@/data/translate';
const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-nokuvgx3njqonar7.us.auth0.com",
    clientId: "Zlvzh5AbmyofpRg5CYb1HTmkX1aZdoN6",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});
app.use(FlagIcon);
app.use(router);
app.use(i18n);
app.use(PrimeVue, {
  unstyled: false,
  pt: Lara,
});

app.mount("#app");
