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
        <option value="">ללא</option>
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
  <teleport to="body">
    <error-alert v-if="inputIsValid">
      <h2>קלט לא תקין</h2>
      <p>אנא הזן: כותרת,דדליין ורמת דחיפות</p>
      <button @click="closeError">הבנתי</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "../UI/ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      enterdTitle: "",
      enterdDescription: "",
      enterdDeadline: "",
      enterdRepetition: "",
      enterdPriority: "",
      inputIsValid: false,
    };
  },
  emits: ["add-todo"],
  methods: {
    submitData() {
      if (
        this.enterdTitle === "" ||
        this.enterdPriority === "" ||
        this.enterdDeadline === ""
      ) {
        this.inputIsValid = true;
        return;
      } else {
        const newTodo = {
          title: this.enterdTitle,
          description: this.enterdDescription,
          deadline: this.enterdDeadline,
          repetition: this.enterdRepetition,
          priority: this.enterdPriority,
        };
        this.$emit("add-todo", newTodo);
        (this.enterdTitle = ""),
          (this.enterdDescription = ""),
          (this.enterdDeadline = ""),
          (this.enterdRepetition = ""),
          (this.enterdPriority = "");
      }
    },
    closeError() {
      this.inputIsValid = false;
    },
  },
};
</script>
