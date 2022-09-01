import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPencil,
  faTrash,
  faPlus,
  faClose,
  faTrashRestore,
} from "@fortawesome/free-solid-svg-icons";

import BasicCard from "./components/UI/BasicCard.vue";
import BasicButton from "./components/UI/BasicButton.vue";
import AppList from "./components/UI/AppList.vue";
import MainPage from "./pages/MainPage.vue";

const NewTodoForm = defineAsyncComponent(() =>
  import("./components/Todos/NewTodoForm.vue")
);

const app = createApp(App);
library.add(faPencil, faTrash, faPlus, faClose, faTrashRestore);

app.component("basic-card", BasicCard);
app.component("main-page", MainPage);
app.component("basic-button", BasicButton);
app.component("app-list", AppList);
app.component("new-todo-form", NewTodoForm);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
