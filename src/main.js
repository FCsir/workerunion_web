import { createApp } from "vue";
import App from "./App.vue";
import naive from "naive-ui";
import { router } from "./router";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { store } from "./store";

const app = createApp(App);
app.use(naive);
app.use(router);
app.use(CKEditor);
app.use(store);

app.mount("#app");
