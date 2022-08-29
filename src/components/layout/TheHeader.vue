<template>
  <header>
    <h2>Done!</h2>
    <div class="byVue">
      <p>powered by vue</p>
      <img
        id="vueIcon"
        src="../../assets/icons/vuejsBrands.svg"
        alt="VueIcon"
      />
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: border-box;
  color: white;
  border-bottom: 4px solid #ccc;
}
h2 {
  font-size: 2rem;
  cursor: pointer;
  margin: 0.4rem 0.4rem 0 0.4rem;
  color: white;
}
.byVue {
  display: flex;
  align-items: center;
}
p {
  padding: 0;
  margin-right: 0.5rem;
}
#vueIcon {
  color: black;
  width: 2rem;
  height: 2rem;
}
</style>
