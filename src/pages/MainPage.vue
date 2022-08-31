<template>
  <new-todo-form @add-todo="addNewTodo"></new-todo-form>
  <app-list>
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :description="todo.description"
      :deadline="todo.deadline"
      :repetition="todo.repetition"
      :priority="todo.priority"
      :is-done="false"
      @toggle-isDone="toggleIsDoneStatus"
      @delete="deleteTodo"
    ></todo-item>
  </app-list>
</template>

<script>
import NewTodoForm from "../components/Todos/NewTodoForm.vue";
import TodoItem from "../components/Todos/TodoItem.vue";
export default {
  components: {
    NewTodoForm,
    TodoItem,
  },
  inject: ["todos"],
  methods: {
    addNewTodo(newTodoObj) {
      console.log("hi from app");

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
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
  },
};
</script>

<style></style>
