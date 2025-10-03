import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import { Quasar, Notify } from "quasar";
import "quasar/dist/quasar.css";

const app = createApp(App);

app.use(store);
app.use(Quasar, { plugins: { Notify } });

app.mount("#app");
