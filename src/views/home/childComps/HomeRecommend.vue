<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.id" class="recommendItem">
      <a :href="item.link">
        <img class="imgRecommend" :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 10px;
  border-bottom: 8px solid #eee;
}
.recommendItem {
  flex: 1;
}
.imgRecommend {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
  /* vertical-align: center; */
}
</style>