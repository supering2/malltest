<template>
  <tab-bar>
    <tabbarItem path="/home" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.png"
        alt
      />
      <div slot="item-text">主页</div>
    </tabbarItem>
    <tabbarItem path="/category" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/category_active.png"
      />
      <div slot="item-text">分类</div>
    </tabbarItem>
    <tabbarItem path="/cart" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/cart_active.png"
        alt
      />

      <div slot="item-text">购物车</div>
    </tabbarItem>
    <tabbarItem path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/profile_active.png"
        alt
      />
      <div slot="item-text">我的</div>
    </tabbarItem>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabbarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabbarItem
  }
};
</script>
