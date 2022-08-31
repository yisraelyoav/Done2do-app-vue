<template>
  <h2>Arcive</h2>
  <app-list>
    <todo-item></todo-item>
  </app-list>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  inject: ["AccomplishedTodos"],
  components: {
    TodoItem,
  },

  methods: {
    deleteTodo(todoId) {
      const todoIndex = this.AccomplishedTodos.findIndex(
        (todo) => todo.id !== todoId
      );
      this.AccomplishedTodos.splice(todoIndex, 1);
      console.log(this.AccomplishedTodos);
    },
  },
};
</script>

<style></style>
