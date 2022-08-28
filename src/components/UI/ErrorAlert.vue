<template>
  <dialog open>
    <slot> </slot>
  </dialog>
</template>

<style scoped>
dialog {
  text-align: center;
  position: fixed;
  top: 30vh;
  width: 25rem;
  border: none;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
