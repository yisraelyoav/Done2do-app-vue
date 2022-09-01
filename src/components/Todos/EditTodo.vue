<script setup>
import { reactive } from "vue";
import ErrorAlert from "../UI/ErrorAlert.vue";
const emit = defineEmits(["editTodo", "close"]);
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
  id: props.id,
  enterdTitle: props.title,
  enterdDescription: props.description,
  enterdDeadline: props.deadline,
  enterdRepetition: props.repetition,
  enterdPriority: props.priority,
  inputIsValid: false,
});

const submitData = () => {
  if (
    state.enterdTitle === "" ||
    state.enterdPriority === "" ||
    state.enterdDeadline === ""
  ) {
    state.inputIsValid = true;
    return;
  } else {
    const editTodo = {
      title: state.enterdTitle,
      description: state.enterdDescription,
      deadline: state.enterdDeadline,
      repetition: state.enterdRepetition,
      priority: state.enterdPriority,
    };
    emit("editTodo", editTodo, state.id);

    (state.enterdTitle = ""),
      (state.enterdDescription = ""),
      (state.enterdDeadline = ""),
      (state.enterdRepetition = ""),
      (state.enterdPriority = "");
    emit("close");
  }
};
const closeError = () => {
  state.inputIsValid = false;
};
</script>

<template>
  <div class="backDrop" @click="emit('close')"></div>
  <Transition name="bounce">
    <span class="editTodo">
      <form @submit.prevent="submitData">
        <div class="editHeader">
          <basic-button
            type="button"
            class="addNewTodoBtn close"
            @click="emit('close')"
          >
            <font-awesome-icon icon="fa-solid fa-close" />
          </basic-button>
          <h2>ערוך משימה</h2>
        </div>
        <div class="formContent">
          <div>
            <label for="Todotitle" class="required">כותרת</label>
            <input
              type="text"
              name="title"
              id="Todotitle"
              maxlength="25"
              placeholder="חובה להזין כותרת"
              v-model.trim="state.enterdTitle"
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
              v-model="state.enterdDescription"
            />
          </div>
          <div>
            <label for="TodoDeadline" class="required">מה הדדליין?</label>
            <input
              type="date"
              name="deadline"
              id="TodoDeadline"
              v-model="state.enterdDeadline"
            />
          </div>
          <div>
            <label for="TodoRepetition">חזרה</label>
            <select
              name="repetition"
              id="TodoRepetition"
              v-model="state.enterdRepetition"
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
            <select
              name="priority"
              id="TodoPriority"
              v-model="state.enterdPriority"
            >
              <option disabled value="">בחר רמת דחיפות</option>
              <option class="high" value="high">בהקדם האפשרי</option>
              <option class="medium" value="medium">צריך לעשות</option>
              <option class="low" value="low">מתישהו</option>
            </select>
          </div>
        </div>
        <basic-button class="createTodoBtn" type="submit">
          שמור את השינויים
        </basic-button>
      </form>
    </span>
  </Transition>
  <teleport to="body">
    <error-alert v-if="state.inputIsValid" @close="closeError">
      <h2>שדות חובה חסרים</h2>
      <p>אנא הזן: כותרת,דדליין ורמת דחיפות</p>
      <basic-button @click="closeError">הבנתי</basic-button>
    </error-alert>
  </teleport>
</template>

<style scoped>
.editHeader {
  margin: 0;
  width: 100%;
  justify-content: flex-start;
}

.editTodo {
  text-align: center;
  position: fixed;
  z-index: 100;
  top: 30vh;
  align-self: center;
  width: 25rem;
  max-width: 80%;
  border: none;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
  padding: 1rem;
}
.addNewTodoBtn {
  width: fit-content;
  margin-top: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 30%;
  border-radius: 50%;
  align-self: baseline;
}
.close {
  background: white;
  color: #f44f6d;
}
.close:hover {
  background: #f44f6d;
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

.high {
  background-color: crimson;
  color: white;
}
.medium {
  background-color: #e8c412;
  color: white;
}
.low {
  background-color: #42d392;
  color: white;
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
