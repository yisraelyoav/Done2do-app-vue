<script setup>
import TodoItem from "../components/Todos/TodoItem.vue";

const props = defineProps({
  completed: Array,
  allTodos: Array,
  deleted: Array,
});

const toggleComplete = (id) => {
  const clickedTodo = props.allTodos.find((todo) => todo.id === id);
  clickedTodo.completed = !clickedTodo.completed;
};
const toggleDelete = (id) => {
  const clickedTodo = props.allTodos.find((todo) => todo.id === id);
  clickedTodo.deleted = !clickedTodo.deleted;
};
</script>
<template>
  <span>
    <h2>ארכיון- לא חבל לזרוק כזאת משימה לפח?! חבל זו משימה טובה...</h2>
    <app-list>
      <todo-item
        v-for="todo in props.deleted"
        :key="todo.id"
        :id="todo.id"
        :title="todo.title"
        :description="todo.description"
        :deadline="todo.deadline"
        :repetition="todo.repetition"
        :priority="todo.priority"
        :completed="todo.completed"
        :deleted="todo.deleted"
        @toggleComplete="toggleComplete"
        @toggleDelete="toggleDelete"
      ></todo-item>
    </app-list>
  </span>
</template>

<style scoped></style>
