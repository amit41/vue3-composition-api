import "./assets/main.css";

import router from "@/router/index.js";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(createPinia()).use(router).mount("#app");
