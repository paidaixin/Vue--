<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DiaLog />
  </div>
</template>

<script>
import DiaLog from "@/views/dialog/index.vue";
export default {
  name: "App",
  components: {
    DiaLog,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
