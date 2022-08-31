<script setup>
import { reactive, computed } from "vue";
import NewTodoForm from "../Todos/NewTodoForm.vue";
import TodosArcive from "../Todos/TodosArcive.vue";

const state = reactive({
  todos: [
    {
      id: "1",
      title: "לבנות אפליקצייה מדהימה",
      description: "אפליקציה מהממת שתשיג לי עבודה",
      deadline: new Date().toLocaleDateString(),
      repetition: "חזרה שבועית",
      priority: "high",
      completed: false,
      deleted: false,
    },
    {
      id: "2",
      title: "להעלות את האפליקציה לשרת",
      description: "הירוקו/פיירבייס/ שרת אחר כלשהו",
      deadline: new Date().toLocaleDateString(),
      repetition: "חזרה שנתית",
      priority: "medium",
      completed: false,
      deleted: false,
    },
    {
      id: "3",
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
  state.todos.push({
    id: state.todos.length + 1,
    title: todoObj.enterdTitle,
    description: todoObj.enterdDescription,
    deadline: todoObj.enterdDeadline,
    repetition: todoObj.enterdRepetition,
    priority: todoObj.enterdPriority,
    completed: false,
    deleted: false,
  });
};

const setSelectedTab = (tab) => {
  state.selectedTab = tab;
};

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

const accompTodoBtnMode = computed(() => {
  return state.selectedTab === "accomplished-todos" ? null : "flat";
});
</script>

<template>
  <basic-card id="tabs" v-bind="$attrs">
    <basic-button @click="setSelectedTab('main-page')" :mode="mainPageBtnMode"
      >המשימות שלי</basic-button
    >
    <basic-button
      @click="setSelectedTab('accomplished-todos')"
      :mode="accompTodoBtnMode"
      >ארכיון</basic-button
    >
  </basic-card>
  <new-todo-form @add-todo="addTodo"></new-todo-form>
  <main-page
    v-if="state.selectedTab"
    :unDone="unDone"
    :completed="completed"
  ></main-page>
  <todos-arcive v-else :deleted="deleted"> </todos-arcive>
</template>

<style>
#tabs {
  width: auto;
}
</style>
