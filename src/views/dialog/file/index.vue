<template>
  <div class="tip">
    <div class="text">
      <span>{{ msg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "早睡早起身体棒",
    },
  },
};
</script>
  
<style>
.tip {
  margin: 0 auto;
  width: 300px;
  height: 150px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  font-size: 30px;
}
</style>