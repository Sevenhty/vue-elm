<template>
  <div>
    <HeaderTop title="我的积分">
      <span class="header_search" slot="left" @click="$router.replace('/profile')">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </HeaderTop>
    <div class="content">
      <div class="sonDiv">
        <p>
          <span style="color:#666; font-size=13px;">当前积分</span>
          <span>
            <img src="./images/1.png" alt /> 积分说明
          </span>
        </p>
        <p>
          <span>0</span> 分
        </p>
        <p>积分兑换商品</p>
      </div>
    </div>
    <p class="transaction">最近30天积分记录</p>
    <img class="img2" src="./images/2.png" alt />
    <p class="method">最近30天无积分记录</p>
    <p class="lastmethod">快去下单赚取大量积分吧</p>
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
.content {
  margin-top: 45px;
  padding: 8px;
  background-color: #3190e8;
}
.sonDiv {
  background: #fff;
  padding: 10px;
  border-radius: 5px 5px;
}
p {
  margin: 0;
  padding: 0;
}
.sonDiv img {
  width: 14px;
  height: 14px;
}
.sonDiv p:first-child {
  display: flex;
  justify-content: space-between;
}
.sonDiv p:first-child span:first-child {
  color: #666;
  font-size: 14px;
}
.sonDiv p:first-child span:last-child {
  color: #3190e8;
  font-size: 15px;
}
.sonDiv p:nth-child(2) span {
  color: #333;
  font-size: 42px;
}
.sonDiv p:last-child {
  height: 48px;
  font-size: 16px;
  color: #fff;
  border-radius: 4px 4px;
  line-height: 48px;
  margin-top: 16px;
  text-align: center;
  background-color: #fe6d47;
}
p.transaction {
  font-size: 15px;
  color: #999;
  line-height: 28px;
  padding-left: 15px;
}
.img2 {
  margin-left: 35px;
}
.method {
  font-size: 15px;
  color: #999;
  text-align: center;
}
.lastmethod {
  font-size: 12px;
  color: #999;
  text-align: center;
}
</style>