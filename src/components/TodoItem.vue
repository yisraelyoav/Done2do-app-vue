<template>
  <ul>
    <li>
      <div>{{ deadline }}</div>
      <div v-if="detailsAreVisible">
        <p>{{ repetition }}</p>
      </div>
      <div>
        <h2 @click="toggleDetails">{{ title }}</h2>
        <div v-if="detailsAreVisible">
          <p>{{ description }}</p>
        </div>
      </div>
      <div class="priority">
        <input type="checkbox" @change="toggleIsDone" />
        <button @click="$emit('delete', id)">Delete</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  //   props: [
  //     "id",
  //     "title",
  //     "description",
  //     "deadline",
  //     "repetition",
  //     "priority",
  //     "isDone",
  //   ],
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
