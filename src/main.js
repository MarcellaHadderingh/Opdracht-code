import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import App from "./App.vue";


Vue.config.productionTip = false;

new Vue({
    "render": (h) => h(App)
}).$mount("#app");
