<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "BackTop",
  methods: {
    // backClick() {
    // console.log("点击回到顶部");
    // console.log(event);
    // console.log(event.clientX, event.clientY);
    // const x = event.clientX;
    // const y = event.clientY;
    // this.$emit("backClick", x, y);
    // }
  }
};
</script>
<style scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>
