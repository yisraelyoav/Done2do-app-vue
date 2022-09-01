<script setup>
import { reactive, computed, defineAsyncComponent } from "vue";
// import ArchivePage from "../../pages/ArchivePage.vue";

const ArchivePage = defineAsyncComponent(() =>
  import("../../pages/ArchivePage.vue")
);
const state = reactive({
  todos: [
    {
      id: 1,
      title: "ללמוד vue ולבנות אפליקציה",
      description: "אפליקציית ניהול משימות ",
      deadline: new Date().toLocaleDateString(),
      repetition: "חזרה שבועית",
      priority: "high",
      completed: true,
      deleted: false,
    },
    {
      id: 2,
      title: "להעלות את האפליקציה לשרת",
      description: "הירוקו/פיירבייס/ נטליפיי",
      deadline: new Date().toLocaleDateString(),
      repetition: "חזרה שנתית",
      priority: "medium",
      completed: false,
      deleted: false,
    },
    {
      id: 3,
      title: "לטייל בכל העולם",
      description: "אפשר להתחיל בחוצה אמריקה הצפונית",
      deadline: new Date().toLocaleDateString(),
      repetition: "חזרה שנתית",
      priority: "low",
      completed: false,
      deleted: false,
    },
  ],
  selectedTab: "main-page",
});

const addTodo = (todoObj) => {
  state.todos.unshift({
    id: state.todos.length + 1,
    title: todoObj.title,
    description: todoObj.description,
    deadline: new Date(todoObj.deadline).toLocaleDateString(),
    repetition: todoObj.repetition,
    priority: todoObj.priority,
    completed: false,
    deleted: false,
  });
};

const setSelectedTab = (tab) => {
  state.selectedTab = tab;
};

const allTodos = computed(() => {
  return state.todos;
});

const unDone = computed(() => {
  return state.todos.filter((todo) => !todo.completed && !todo.deleted);
});

const completed = computed(() => {
  return state.todos.filter((todo) => todo.completed && !todo.deleted);
});
const deleted = computed(() => {
  return state.todos.filter((todo) => todo.deleted);
});

const mainPageBtnMode = computed(() => {
  return state.selectedTab === "main-page" ? null : "flat";
});

const archiveBtnMode = computed(() => {
  return state.selectedTab === "archive" ? null : "flat";
});
</script>

<template>
  <basic-card id="tabs" v-bind="$attrs">
    <basic-button @click="setSelectedTab('main-page')" :mode="mainPageBtnMode"
      >המשימות שלי</basic-button
    >
    <basic-button @click="setSelectedTab('archive')" :mode="archiveBtnMode"
      >ארכיון</basic-button
    >
  </basic-card>
  <new-todo-form @add-todo="addTodo"></new-todo-form>
  <main-page
    v-if="state.selectedTab === 'main-page'"
    :allTodos="allTodos"
    :unDone="unDone"
    :completed="completed"
    :deleted="deleted"
  ></main-page>
  <archive-page
    v-else
    :deleted="deleted"
    :allTodos="allTodos"
    :unDone="unDone"
    :completed="completed"
  >
  </archive-page>
</template>

<style>
#tabs {
  width: auto;
}
</style>
