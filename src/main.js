import Vue from 'vue';
import VueLogger from 'vuejs-logger';
import * as Keycloak from 'keycloak-js'

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker';

Vue.use(ElementUI);
Vue.use(ElementUI, { locale });

// Logging
Vue.config.productionTip = false;
const options = {
  isEnabled: true,
  logLevel : Vue.config.productionTip  ? 'error' : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};
Vue.use(VueLogger, options);

// Keycloak init options
let initOptions = {
  url: 'http://localhost:5555/auth/', 
  realm: 'Keycloak-demo', 
  clientId: 'vue-test-app',
  onLoad:'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad })
  .then((auth) => {

    if (!auth) {
      window.location.reload();
    } else {
      Vue.$log.info("Authenticated");

      new Vue({
        router,
        store,
        render: (h) => h(App),
      }).$mount('#app');
    }

     // TODO: Maybe dont store the token in the localstore, rather use it direct from the keycloak.token object
     localStorage.setItem("vue-token", keycloak.token);
     localStorage.setItem("vue-refresh-token", keycloak.refreshToken); 

    //Token Refresh
    setInterval(() => {
      keycloak.updateToken(70).then((refreshed) => {
        if (refreshed) {
          Vue.$log.info('Token refreshed' + refreshed);
        } else {
          Vue.$log.warn('Token not refreshed, valid for '
            + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).catch(() => {
        Vue.$log.error('Failed to refresh token');
      });
    }, 6000)

  })
  .catch(() => {
      Vue.$log.error("Authenticated Failed");
});