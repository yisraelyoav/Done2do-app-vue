<template>
  <basic-card>
    <li>
      <div class="times">
        <div>{{ deadline }}</div>
        <transition name="bounce">
          <div v-if="detailsAreVisible">
            <p>{{ repetition }}</p>
          </div>
        </transition>
      </div>
      <div>
        <h2 @click="toggleDetails">{{ title }}</h2>
        <transition name="bounce">
          <div v-if="detailsAreVisible">
            <p>{{ description }}</p>
          </div>
        </transition>
      </div>
      <div
        class="priority"
        :class="{
          highPriority: priorityStatus.High,
          mediumPriority: priorityStatus.Medium,
          lowPriority: priorityStatus.Low,
        }"
      >
        <div class="priority-buttons">
          <Transition name="bounce">
            <button v-if="detailsAreVisible" @click="$emit('delete', id)">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
          </Transition>
          <input class="doneCheckbox" type="checkbox" @change="toggleIsDone" />
          <Transition name="bounce">
            <button @click="$emit('edit', id)" v-if="detailsAreVisible">
              <font-awesome-icon icon="fa-solid fa-pencil" />
            </button>
          </Transition>
        </div>
      </div>
    </li>
  </basic-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
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
      type: String,
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
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      priorityStatus: {
        High: this.priority === "high",
        Medium: this.priority === "medium",
        Low: this.priority === "low",
      },
    };
  },
  emits: ["toggle-isDone", "delete"],
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleIsDone() {
      this.$emit("toggle-isDone", this.id);
    },
  },
};
</script>

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
  width: 4rem;
  margin: 0 0.5rem 0 0;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.highPriority {
  background-color: crimson;
}
.mediumPriority {
  background-color: #647eff;
}
.lowPriority {
  background-color: #42d392;
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
