<template>
  <div class="goods">
    <good-list-item :goodItem="item" v-for="item in goods" :key="item.id" />
  </div>
</template>
<script>
import GoodListItem from "./GoodListItem";
export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodListItem
  }
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>