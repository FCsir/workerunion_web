import { createApp } from "vue";
import App from "./App.vue";
import naive from "naive-ui";
import { router } from "./router";
import CKEditor from "@ckeditor/ckeditor5-vue";

const app = createApp(App);
app.use(naive);
app.use(router);
app.use(CKEditor);

app.mount("#app");
