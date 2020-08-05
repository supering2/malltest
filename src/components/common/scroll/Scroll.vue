<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import PullUp from "better-scroll";
// BScroll.use(PullUp);
export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },

  mounted() {
    // 1.创建 better-scroll 对象
    const wrapper = this.$refs.wrapper;
    // console.log(wrapper);
    this.scroll = new BScroll(wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    // 2. 监听滚动的位置
    // this.scroll.scrollTo(x, y);
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
      console.log(x, y);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }
    //监听图片什么时候加载完,加载完之后 手动刷新一下
    // scrollRefresh() {
    //   this.scroll.refresh();
    // }
  }
};
</script>
<style scoped>
/* .wrapper {
  height: 400px;
} */
</style>
