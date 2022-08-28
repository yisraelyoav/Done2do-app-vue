<template>
  <basic-card>
    <li>
      <div class="times">
        <div>{{ deadline }}</div>
        <div v-if="detailsAreVisible">
          <p>{{ repetition }}</p>
        </div>
      </div>
      <div>
        <h2 @click="toggleDetails">{{ title }}</h2>
        <div v-if="detailsAreVisible">
          <p>{{ description }}</p>
        </div>
      </div>
      <div class="priority">
        <div class="priority-buttons">
          <button v-if="detailsAreVisible" @click="$emit('delete', id)">
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
          <input class="doneCheckbox" type="checkbox" @change="toggleIsDone" />
          <button @click="$emit('edit', id)" v-if="detailsAreVisible">
            <font-awesome-icon icon="fa-solid fa-pencil" />
          </button>
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
.priority {
  width: 4rem;
  border-radius: 10px 0 0 10px;
  background-color: crimson;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: 0 2rem 0 0;
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
