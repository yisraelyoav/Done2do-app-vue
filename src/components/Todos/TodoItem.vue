<script setup>
import EditTodo from "./EditTodo.vue";
import { reactive } from "vue";
const emit = defineEmits(["toggleComplete", "toggleDelete", "editTodo"]);
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  repetition: {
    type: String,
    required: false,
  },
  priority: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const state = reactive({
  detailsAreVisible: false,
  editTodoFormVisible: false,
  priorityStatus: {
    High: props.priority === "high",
    Medium: props.priority === "medium",
    Low: props.priority === "low",
  },
  todoStatus: {
    completed: props.completed === true,
    deleted: props.deleted === true,
  },
});
const toggleDetails = () => {
  state.detailsAreVisible = !state.detailsAreVisible;
};
const toggleEditTodoForm = () => {
  state.editTodoFormVisible = !state.editTodoFormVisible;
};
const editTodoFunc = (editTodoObj, id) => {
  emit("editTodo", editTodoObj, id);
};
</script>

<template>
  <basic-card>
    <li>
      <div
        class="times"
        :calss="{
          completed: state.todoStatus.completed,
          deleted: state.todoStatus.deleted,
        }"
      >
        <div>{{ deadline.toLocaleDateString() }}</div>
        <transition name="bounce">
          <div v-show="state.detailsAreVisible">
            <p>{{ repetition }}</p>
          </div>
        </transition>
      </div>
      <div>
        <h2 @click="toggleDetails">{{ title }}</h2>
        <transition name="bounce">
          <div v-if="state.detailsAreVisible">
            <p>{{ description }}</p>
          </div>
        </transition>
      </div>
      <div
        class="priority"
        :class="{
          highPriority: state.priorityStatus.High,
          mediumPriority: state.priorityStatus.Medium,
          lowPriority: state.priorityStatus.Low,
        }"
      >
        <div class="priority-buttons">
          <Transition name="bounce">
            <button
              v-if="state.detailsAreVisible"
              @click="emit('toggleDelete', id)"
            >
              <font-awesome-icon
                v-if="state.todoStatus.deleted"
                icon="fa-solid fa-trash-restore"
              />
              <font-awesome-icon v-else icon="fa-solid fa-trash" />
            </button>
          </Transition>
          <input
            class="doneCheckbox"
            type="checkbox"
            name="isdone"
            @change="emit('toggleComplete', id)"
            :checked="completed"
          />
          <Transition name="bounce">
            <button v-if="state.detailsAreVisible" @click="toggleEditTodoForm">
              <font-awesome-icon icon="fa-solid fa-pencil" />
            </button>
          </Transition>
        </div>
      </div>
    </li>
  </basic-card>
  <edit-todo
    v-if="state.editTodoFormVisible"
    :id="props.id"
    :title="props.title"
    :description="props.description"
    :deadline="props.deadline"
    :repetition="props.repetition"
    :priority="props.priority"
    completed
    deleted
    @close="toggleEditTodoForm"
    @editTodo="editTodoFunc"
  ></edit-todo>
</template>

<style scoped>
li {
  justify-content: space-between;
  display: flex;
  direction: rtl;
}
h2 {
  font-size: 2rem;
  cursor: pointer;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 1rem 0;
}
.priority {
  width: 8%;
  min-width: 2rem;
  margin: 0 0.5rem 0 0;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.highPriority {
  background-color: crimson;
}
.mediumPriority {
  background-color: #e8c412;
}
.lowPriority {
  background-color: #42d392;
}
.completed {
  background-color: aqua;
  color: #e8c412;
}
.deleted {
  background-color: aqua;
  color: #e8c412;
}
.doneCheckbox:checked {
  cursor: pointer;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  color: #f3f3f3;
  text-align: center;
  line-height: 15px;
}
.doneCheckbox:hover {
  cursor: pointer;
}
.priority-buttons {
  display: flex;
  flex-direction: column;
}
.times {
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 0.5rem;
  justify-content: center;
}
.priority-buttons button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  background-clip: border-box;
  color: white;
  box-shadow: none;
}

.priority-buttons button:hover,
.priority-buttons button:active {
  border: none;
  background: none;
  color: black;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
</style>
