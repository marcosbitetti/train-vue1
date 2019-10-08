import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});


//Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(VueAxios, axios);

Vue.prototype.$api = {
  //baseUrl: 'http://bill.dev.br',
  //baseUrl: 'http://0d9c6467.ngrok.io',
  timeout: 10000,
  headers: {
  }
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {

  }
});
