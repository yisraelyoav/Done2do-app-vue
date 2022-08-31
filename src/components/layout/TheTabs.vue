<template>
  <basic-card id="tabs">
    <basic-button @click="setSelectedTab('main-page')" :mode="mainPageBtnMode"
      >המשימות שלי</basic-button
    >
    <basic-button
      @click="setSelectedTab('accomplished-todos')"
      :mode="accompTodoBtnMode"
      >משימות שסיימתי</basic-button
    >
  </basic-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AccomplishedTodos from "../Todos/AccomplishedTodos.vue";
export default {
  components: {
    AccomplishedTodos,
  },
  data() {
    return {
      selectedTab: "main-page",
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
  provide() {
    return {
      todos: this.todos,
    };
  },
  computed: {
    mainPageBtnMode() {
      return this.selectedTab === "main-page" ? null : "flat";
    },
    accompTodoBtnMode() {
      return this.selectedTab === "accomplished-todos" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style>
#tabs {
  width: auto;
}
</style>
