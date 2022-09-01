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
</script>
<template>
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
    ></todo-item>
  </app-list>
  <h2>משימות שהושלמו</h2>
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
    ></todo-item>
  </app-list>
</template>

<!-- <script>
import NewTodoForm from "../components/Todos/NewTodoForm.vue";
import TodoItem from "../components/Todos/TodoItem.vue";
export default {
  components: {
    NewTodoForm,
    TodoItem,
  },
  inject: ["todos", "AccomplishedTodos"],
  methods: {
    addNewTodo(newTodoObj) {
      const newTodo = {
        id: new Date().toISOString(),
        title: newTodoObj.title,
        description: newTodoObj.description,
        deadline: new Date(newTodoObj.deadline).toLocaleDateString(),
        repetition: newTodoObj.repetition,
        priority: newTodoObj.priority,
        isDone: false,
      };
      this.todos.unshift(newTodo);
      console.log(this.todos);
    },
    toggleIsDoneStatus(todoId) {
      const clickedTodo = this.todos.find((todo) => todo.id === todoId);
      clickedTodo.isDone = !clickedTodo.isDone;
      if (clickedTodo.isDone === true) this.todos.splice(clickedTodo.index, 1);
    },
    deleteTodo(todoId) {
      const todoIndex = this.todos.findIndex((todo) => todo.id !== todoId);
      this.todos.splice(todoIndex, 1);
      console.log(this.todos);
    },
  },
};
</script> -->

<style></style>
