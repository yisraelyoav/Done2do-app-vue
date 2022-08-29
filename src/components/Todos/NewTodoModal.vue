<template>
  <form @submit.prevent="submitData">
    <div class="addHeader">
      <Transition mode="out-in">
        <button
          type="button"
          v-if="toggleModal === false"
          class="addNewTodoBtn"
          @click="toggleNewTodoModal"
        >
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
        <button
          type="button"
          v-else-if="toggleModal"
          class="addNewTodoBtn"
          @click="toggleNewTodoModal"
        >
          <font-awesome-icon icon="fa-solid fa-close" />
        </button>
      </Transition>
      <h2 v-if="toggleModal === false" @click="toggleNewTodoModal">
        צור משימה חדשה
      </h2>
      <h2 v-else-if="toggleModal">משימה חדשה</h2>
    </div>

    <div class="formContent" v-if="toggleModal">
      <div>
        <label for="Todotitle" class="required">כותרת</label>
        <input
          type="text"
          name="title"
          id="Todotitle"
          maxlength="25"
          v-model="enterdTitle"
        />
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
        <label for="TodoDeadline" class="required">מה הדדליין?</label>
        <input
          type="datetime-local"
          name="deadline"
          id="TodoDeadline"
          v-model="enterdDeadline"
        />
      </div>
      <div>
        <label for="TodoRepetition">חזרה</label>
        <select
          name="repetition"
          id="TodoRepetition"
          v-model="enterdRepetition"
        >
          <option value="">ללא</option>
          <option value="חזרה יומית">יומית</option>
          <option value="חזרה שבועית">שבועית</option>
          <option value="חזרה חודשית">חודשית</option>
          <option value="חזרה שנתית">שנתית</option>
        </select>
      </div>
      <div>
        <label for="TodoPriority" class="required">כמה זה דחוף?</label>
        <select name="priority" id="TodoPriority" v-model="enterdPriority">
          <option disabled value="">בחר רמת דחיפות</option>
          <option value="high">בהקדם האפשרי</option>
          <option value="medium">צריך לעשות</option>
          <option value="low">מתישהו</option>
        </select>
      </div>
    </div>
    <button v-if="toggleModal" class="createTodoBtn" type="submit">
      צור משימה חדשה
    </button>
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
  // props: {
  //   toggleModal: {
  //     type: Boolean,
  //     require: true,
  //   },
  // },
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
      toggleModal: false,
    };
  },
  emits: ["add-todo"],
  methods: {
    toggleNewTodoModal() {
      this.toggleModal = !this.toggleModal;
    },
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
        this.toggleNewTodoModal();
      }
    },
    closeError() {
      this.inputIsValid = false;
    },
  },
};
</script>

<style scoped>
.addHeader {
  margin: 0;
  width: 100%;
  justify-content: flex-start;
}
.addNewTodoBtn {
  width: fit-content;
  margin-top: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 25%;
  border-radius: 50%;

  align-self: baseline;
}
h2 {
  align-self: baseline;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  direction: rtl;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;
  max-width: 60rem;
}
.formContent {
  display: flex;
  flex-direction: column;
  text-align: right;
}
input {
  font: inherit;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline;
}
.required:after {
  content: "*";
  color: red;
}
textarea {
  resize: none;
}
form div {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.createTodoBtn {
  width: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
