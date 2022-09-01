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
const deleteTodo = (id) => {
  const clickedTodo = props.allTodos.find((todo) => todo.id === id);
  clickedTodo.deleted = !clickedTodo.deleted;
};
</script>
<template>
  <h2>Arcive</h2>
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
      @delete="deleteTodo"
    ></todo-item>
  </app-list>
</template>

<style></style>
