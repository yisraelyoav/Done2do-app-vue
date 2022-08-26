import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);

import TodoItem from "./components/TodoItem.vue";
import NewTodoModal from "./components/NewTodoModal.vue";
library.add(faPencil, faTrash);
app.component("todo-item", TodoItem);
app.component("new-todo-modal", NewTodoModal);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
