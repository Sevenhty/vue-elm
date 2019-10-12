<template>
  <div>
    <HeaderTop title="服务中心">
      <span class="header_search" slot="left" @click="$router.replace('/profile')">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </HeaderTop>
    <div class="icon">
      <div class="left">
        <i class="iconfont icon-kefu"></i>
        <p>在线客服</p>
      </div>
      <div class="left">
        <i class="iconfont icon-weibiaoti-"></i>
        <p>在线客服</p>
      </div>
    </div>
    <p class="hot">热门问题</p>
    <ul>
      <li v-for="(question,index) in questions" :key="index">
        <span>{{question}}</span>
        <span>></span>
      </li>
    </ul>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  components: {
    HeaderTop
  },
  data() {
    return {
      questions: [
        "超级会员权益说明",
        "签到规则",
        "用户等级说明",
        "积分问题",
        "教我拍大片",
        "支付问题",
        "其他问题",
        "准时达问题",
        "会员说明",
        "会员问题",
        "红包问题",
        "活动细则",
        "补签规则",
        "优惠说明",
        "免责声明",
        "代金券说明",
        "商务合作",
        "余额问题",
        "超赞商家",
        "匿名购买",
        "活动问题"
      ]
    };
  }
};
</script>

<style scoped>
.icon {
  margin-top: 45px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.left {
  border-right: 1px solid rgba(0, 0, 0, 0.05);
}
.icon > div {
  width: 50%;
  box-sizing: border-box;
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.icon > div i {
  font-size: 24px;
}
.icon > div p {
  margin: 9px 0 0;
  font-size: 14px;
  color: #999;
}
.hot {
  font-size: 17px;
  color: #333;
  line-height: 3rem;
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 0 10px 16px;
  background: #fff;
  margin: 0;
}
ul,
li {
  list-style: none;
  background: #fff;
  padding: 0;
  margin: 0;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}
li span {
  padding: 13px 0;
  font-size: 14px;
  color: #666;
}
</style>