<template>
  <div class="footer_guide bottom-border-1px">
    <span
      href="javascript:;"
      class="guide_item"
      :class="{on:$route.path === '/msite'}"
      @click="goTo('/msite')"
    >
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <span
      href="javascript:;"
      class="guide_item"
      :class="{on: $route.path ==='/search'}"
      @click="goTo('/search')"
    >
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span
      href="javascript:;"
      class="guide_item"
      :class="{on: $route.path ==='/order'}"
      @click="goTo('/order')"
    >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span
      href="javascript:;"
      class="guide_item"
      :class="{on: $route.path ==='/profile'}"
      @click="goTo('/profile')"
    >
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style scoped>
.footer_guide {
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 2px solid rgba(49, 144, 232, 0.1);
}
.footer_guide .guide_item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  color: #999999;
  text-decoration: none;
}
.footer_guide .on {
  color: #3190e8;
}
.footer_guide span {
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.footer_guide .iconfont {
  font-size: 22px;
}
</style>