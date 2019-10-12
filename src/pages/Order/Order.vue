<template>
  <div>
    <section class="order">
      <header class="header">
        <a class="header_title">
          <span class="header_title_text">订单列表</span>
        </a>
      </header>
      <section class="order_no_login">
        <img src="./images/person.png" />
        <h3>登录后查看外卖订单</h3>
        <button>立即登陆</button>
      </section>
    </section>
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
.header {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
.order {
  width: 100%;
}
.order_no_login {
  padding-top: 140px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
.order_no_login > img {
  display: block;
  width: 100%;
  height: 30%;
}
.order_no_login > h3 {
  padding: 10px 0;
  font-size: 17px;
  color: #6a6a6a;
}
.order_no_login > button {
  display: inline-block;
  background: #3190e8;
  font-size: 14px;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
}
</style>