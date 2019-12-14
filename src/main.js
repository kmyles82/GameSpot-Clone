/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import store from "./store";
import VueCarousel from "vue-carousel";
import Button from "./components/Utils/button";
import { MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import VueResource from "vue-resource";
import Vuelidate from "vuelidate";
import wysiwyg from 'vue-wysiwyg'


Vue.use(Vuelidate);
Vue.use(wysiwyg,{});
Vue.use(MdCard);
Vue.use(VueCarousel);

Vue.use(VueResource);
Vue.http.options.root = "https://gamespot-79a3e.firebaseio.com";

Vue.component("app-button", Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");