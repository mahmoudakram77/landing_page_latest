import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAgile from "vue-agile";
import { DatePicker } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueDarkMode from "@vue-a11y/dark-mode";

createApp(App)
  .use(VueAgile)
  .use(DatePicker)
  .use(store)
  .use(router)
  .use(VueDarkMode)
  .mount("#app");
