import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCarousel from "vue-carousel";
import Button from "./components/Utils/button";
import { MdCard } from "vue-material/dist/components";
import VueResource from "vue-resource";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.use(VueResource);
Vue.use(MdCard);
Vue.use(VueCarousel);

Vue.http.options.root = "https://gamespot-79a3e.firebaseio.com";

Vue.component("app-button", Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
