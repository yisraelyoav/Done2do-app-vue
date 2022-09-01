<script setup>
import TodoItem from "../components/Todos/TodoItem.vue";

const props = defineProps({
  unDone: Array,
  completed: Array,
  allTodos: Array,
});

const toggleComplete = (id) => {
  const clickedTodo = props.allTodos.find((todo) => todo.id === id);
  clickedTodo.completed = !clickedTodo.completed;
};
const toggleDelete = (id) => {
  const clickedTodo = props.allTodos.find((todo) => todo.id === id);
  clickedTodo.deleted = !clickedTodo.deleted;
};
const editTodo = (editTodoObj, id) => {
  const clickedTodo = props.allTodos.find((todo) => todo.id === id);
  clickedTodo.title = editTodoObj.title;
  clickedTodo.description = editTodoObj.description;
  clickedTodo.deadline = new Date(editTodoObj.deadline).toLocaleDateString();
  clickedTodo.repetition = editTodoObj.repetition;
  clickedTodo.priority = editTodoObj.priority;
};
</script>
<template>
  <span>
    <h2 class="headline">משימות שצריך עוד לעשות</h2>
    <app-list>
      <todo-item
        v-for="todo in props.unDone"
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
        @editTodo="editTodo"
      ></todo-item>
    </app-list>
    <h2 class="headline">משימות שהושלמו</h2>
    <app-list>
      <todo-item
        v-for="todo in props.completed"
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
        @editTodo="editTodo"
      ></todo-item>
    </app-list>
  </span>
</template>

<style></style>
