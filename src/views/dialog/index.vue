<template>
  <button @click="openTip">小提示</button>
</template>

<script>
export default {
  methods: {
    openTip() {
      this.$Dialog({ msg: "少玩手机" }).init();
      setTimeout(() => {
        this.$Dialog().hide();
      }, 3000);
    },
  },
};
</script>

<style>
button {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>