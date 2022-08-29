<template>
  <div class="layout">
    <slot> </slot>
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  max-width: 95%;
}
</style>
