<template>
  <div class="wrap">
    <HeaderTop title="下载">
      <span class="header_search" slot="left" @click="$router.replace('/profile')">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </HeaderTop>
    <p>
      <img src="./images/3.jpg" alt />
    </p>
    <p>下载饿了么APP</p>
    <p>下载</p>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  components: {
    HeaderTop
  }
};
</script>

<style scoped>
.wrap {
  height: 100%;
  background: #ffffff;
}
p {
  text-align: center;
}
.wrap p:first-of-type {
  padding-top: 70px;
  margin: 0;
}
.wrap p:first-of-type img {
  border-radius: 20px 20px;
}
.wrap p:nth-of-type(2) {
  font-size: 18px;
  color: #666;
  margin: 0;
  margin-bottom: 23px;
}
.wrap p:last-of-type {
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  color: #fff;
  background: #4cd964;
  border-radius: 5px 5px;
}
</style>