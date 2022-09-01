<template>
  <the-header />
  <app-layout>
    <main>
      <the-tabs class="tabs"> </the-tabs>
    </main>
  </app-layout>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import AppLayout from "./components/layout/appLayout.vue";
import TheTabs from "./components/layout/TheTabs.vue";
export default {
  components: {
    TheHeader,
    AppLayout,
    TheTabs,
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
  direction: rtl;
}
main {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 1rem;
}

#app {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.headline {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #000000;
  margin: 0 0 1rem 0;
  text-align: center;
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
