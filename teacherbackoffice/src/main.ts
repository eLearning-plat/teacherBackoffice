import { createApp } from 'vue'
import './assets/index.css'
// @ts-expect-error
import App from './App.vue'
// @ts-expect-error
import router from './router/router.js'
// @ts-expect-error
import i18n from './data/translate.cjs';
// @ts-expect-error
import FlagIcon from 'vue-flag-icon';
// @ts-expect-error
import store from './store/store'; 

import { createAuth0 } from '@auth0/auth0-vue';
const app =createApp(App)
app.use(router);
app.use(store); 
app.use(i18n);
app.use(
  createAuth0({
    domain: "dev-nokuvgx3njqonar7.us.auth0.com",
    clientId: "vV33JDcd9Gi2xsh2O9ZemZG5kLTD5xTY",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
); 
app.use(FlagIcon);
app.mount('#app')
