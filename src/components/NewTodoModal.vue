<template>
  <form @submit.prevent="submitData">
    <h2>משימה חדשה</h2>
    <div>
      <label for="Todotitle">כותרת</label>
      <input type="text" name="title" id="Todotitle" v-model="enterdTitle" />
    </div>
    <div>
      <label for="TodoDescription">פירוט</label>
      <textarea
        type="text"
        name="description"
        id="TodoDescription"
        maxlength="45"
        rows="3"
        v-model="enterdDescription"
      />
    </div>
    <div>
      <label for="TodoDeadline">יש דדליין?</label>
      <input
        type="datetime-local"
        name="deadline"
        id="TodoDeadline"
        v-model="enterdDeadline"
      />
    </div>
    <div>
      <label for="TodoRepetition">חזרה</label>
      <select name="repetition" id="TodoRepetition" v-model="enterdRepetition">
        <option value="חזרה יומית">יומית</option>
        <option value="חזרה שבועית">שבועית</option>
        <option value="חזרה חודשית">חודשית</option>
        <option value="חזרה שנתית">שנתית</option>
      </select>
    </div>
    <div>
      <label for="TodoPriority">זה דחוף?</label>
      <select name="priority" id="TodoPriority" v-model="enterdPriority">
        <option value="High">בהקדם האפשרי</option>
        <option value="Medium">צריך לעשות</option>
        <option value="Low">מתישהו</option>
      </select>
    </div>
    <button type="submit">צור משימה חדשה</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enterdTitle: "",
      enterdDescription: "",
      enterdDeadline: "",
      enterdRepetition: "",
      enterdPriority: "",
    };
  },
  emits: ["add-todo"],
  methods: {
    submitData() {
      const newTodo = {
        title: this.enterdTitle,
        description: this.enterdDescription,
        deadline: this.enterdDeadline,
        repetition: this.enterdRepetition,
        priority: this.enterdPriority,
      };
      this.$emit("add-todo", newTodo);
    },
  },
};
</script>
