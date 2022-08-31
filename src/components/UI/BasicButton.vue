<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ["type", "mode"],
};
</script>
<style scoped>
button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid #42bf84;
  border-radius: 10px;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: border-box;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  border: 1px solid #5e8deb;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: border-box;
  color: rgb(132, 6, 146);
  box-shadow: 3px 3px 3px rgba(105, 1, 125, 0.26);
}

.flat {
  background: none;
  background-color: transparent;
  border: none;
  color: rgb(132, 6, 146);
  box-shadow: none;
}
.flat:hover,
.flat:active {
  background: rgb(138 157 252);
  background-clip: border-box;
  color: white;
}
</style>
