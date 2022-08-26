<template>
  <h2 class="header">Done!</h2>
  <new-todo-modal @add-todo="addNewTodo"></new-todo-modal>
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
  />
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: "1",
          title: "Build an awesome 2Do app",
          description: "dazzeling app that will get you a job",
          deadline: new Date().toLocaleDateString(),
          repetition: "חזרה שבועית",
          priority: "High",
          isDone: false,
        },
        {
          id: "2",
          title: "Get a job",
          description: "finally get an amazing job",
          deadline: new Date().toLocaleDateString(),
          repetition: "חזרה שנתית",
          priority: "High",
          isDone: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    toggleIsDoneStatus(todoId) {
      const clickedTodo = this.todos.find((todo) => todo.id === todoId);
      clickedTodo.isDone = !clickedTodo.isDone;
    },
    addNewTodo(newTodoObj) {
      const newTodo = {
        id: new Date().toISOString(),
        title: newTodoObj.title,
        description: newTodoObj.description,
        deadline: newTodoObj.deadline,
        repetition: newTodoObj.repetition,
        priority: newTodoObj.priority,
        isDone: false,
      };
      this.todos.push(newTodo);
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  display: flex;
  justify-content: space-around;
  direction: rtl;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  text-align: center;
  width: 95%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  cursor: pointer;
  border-bottom: 4px solid #ccc;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 1rem 0;
}

#app form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  direction: rtl;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 0.5rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid #42bf84;
  border-radius: 10px;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: border-box;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  border: 1px solid #5e8deb;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: border-box;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app textarea {
  resize: none;
}
#app form div {
  margin: 1rem 0;
}
#app .priority {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#app .priority-buttons {
  display: flex;
  flex-direction: column;
}

#app .times {
  display: flex;
  flex-direction: column;

  justify-content: center;
}
</style>
