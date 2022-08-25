import { createApp } from "vue";
import App from "./App.vue";

import TodoItem from "./components/TodoItem.vue";
import NewTodoModal from "./components/NewTodoModal.vue";
const app = createApp(App);

app.component("todo-item", TodoItem);
app.component("new-todo-modal", NewTodoModal);

app.mount("#app");
