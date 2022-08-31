<template>
  <div class="backDrop" @click="$emit('close')"></div>
  <dialog open>
    <slot> </slot>
  </dialog>
</template>
<script>
export default {
  emits: ["close"],
};
</script>

<style scoped>
.backDrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
dialog {
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
</style>
