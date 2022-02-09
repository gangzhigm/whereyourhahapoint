import { createApp } from "vue";
import App from "./views/Index.vue";
import router from "./router";
import store from "./store";
import "normalize.css";

createApp(App)
  .use(store)
  .use(router)
  // .mixin({
  //   methods: {
  //     $electron: ()=>{
  //       return window.require ? window.require("electron") : null;
  //     },
  //     $eelectron: window.require("electron")
  //   }
  // })
  .mount("#app");
