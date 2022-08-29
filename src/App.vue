<template>
  <theHeader />
  <AppLayout>
    <main>
      <new-todo-modal @add-todo="addNewTodo"></new-todo-modal>
      <ul>
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
      </ul>
    </main>
  </AppLayout>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import AppLayout from "./components/layout/appLayout.vue";
import TodoItem from "./components/Todos/TodoItem.vue";
import NewTodoModal from "./components/Todos/NewTodoModal.vue";
export default {
  components: {
    TheHeader,
    AppLayout,
    TodoItem,
    NewTodoModal,
  },
  data() {
    return {
      todos: [
        {
          id: "1",
          title: "לבנות אפליקצייה מדהימה",
          description: "אפליקציה מהממת שתשיג לי עבודה",
          deadline: new Date().toLocaleDateString(),
          repetition: "חזרה שבועית",
          priority: "high",
          isDone: false,
        },
        {
          id: "2",
          title: "להעלות את האפליקציה לשרת",
          description: "הירוקו/פיירבייס/ שרת אחר כלשהו",
          deadline: new Date().toLocaleDateString(),
          repetition: "חזרה שנתית",
          priority: "medium",
          isDone: false,
        },
        {
          id: "3",
          title: "לטייל בכל העולם",
          description: "אפשר להתחיל בחוצה אמריקה הצפונית",
          deadline: new Date().toLocaleDateString(),
          repetition: "חזרה שנתית",
          priority: "low",
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
      this.todos.push(newTodo);
      console.log(this.todos);
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
main {
  display: flex;
  flex-direction: column;
}
#app {
  display: flex;
  flex-direction: column;
  align-content: center;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
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

button:hover,
button:active {
  border: 1px solid #5e8deb;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: border-box;
  color: rgb(132, 6, 146);
  box-shadow: 3px 3px 3px rgba(105, 1, 125, 0.26);
}


</style>
