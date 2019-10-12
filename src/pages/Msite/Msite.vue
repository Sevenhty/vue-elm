 <template>
  <section class="msite">
    <!--首页头部-->
    <div class="head" @click="$router.replace('/choosolocation')">
      <HeaderTop :title="cityname">
        <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
        </span>
      </HeaderTop>>
    </div>

    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpeg" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpeg" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpeg" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpeg" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpeg" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpeg" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpeg" />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpeg" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpeg" />
              </div>
              <span>川湘菜</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpeg" />
              </div>
              <span>麻辣烫</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpeg" />
              </div>
              <span>包子粥店</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpeg" />
              </div>
              <span>鲜花蛋糕</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpeg" />
              </div>
              <span>日韩料理</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpeg" />
              </div>
              <span>果蔬生鲜</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/15.jpeg" />
              </div>
              <span>汉堡薯条</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/16.jpeg" />
              </div>
              <span>披萨意面</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <ul class="clearfix">
          <li v-for="(shop,index) in shops" :key="index" class="clearfix" @click="intoShop(shop)">
            <img :src="'//elm.cangdu.org/img/' + shop.image_path" alt />
            <div class="one">
              <p>
                <span class="brand">品牌</span>
                <span class="shopname">{{shop.name}}</span>
              </p>
              <p>
                <span class="three">保 准 票</span>
              </p>
            </div>
            <div class="two">
              <p>
                <img src="./images/stars/star.png" class="star" />
                <img src="./images/stars/star.png" class="star" />
                <img src="./images/stars/star.png" class="star" />
                <img src="./images/stars/star.png" class="star" />
                <img src="./images/stars/star.png" class="star" />
                &nbsp;
                <span>{{shop.rating}}</span>
                <span>月售 {{shop.recent_order_num}}单</span>
              </p>
              <p>
                <span>蜂鸟专送</span>
                <span>准时达</span>
              </p>
            </div>

            <div class="threeDiv">
              <p>
                ￥{{shop.float_minimum_order_amount}}起送 /
                配送费约￥{{shop.float_delivery_fee}}
              </p>
              <p>
                {{shop.distance}} /
                <span>{{shop.order_lead_time}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  computed: mapGetters(["historyMessages"]),
  mounted() {
    //创建一个swiper实例对象，来实现轮播
    new Swiper(".swiper-container", {
      loop: true, //可以循环轮播
      pagination: {
        el: ".swiper-pagination"
      }
    });
    this.cityname = this.historyMessages[0].name;
    //console.log(this.historyMessages[0].geohash);
    this.getGeo();
    this.getShops();
  },
  components: {
    HeaderTop
  },
  data() {
    return {
      cityname: "",
      latitude: "",
      longitude: "",
      shops: []
    };
  },
  methods: {
    // 将获取到的地理位置拆分为两个数组
    getGeo() {
      (this.latitude = this.historyMessages[0].geohash.split(",")[0]),
        (this.longitude = this.historyMessages[0].geohash.split(",")[1]),
        console.log(this.latitude, this.longitude);
    },
    getShops() {
      this.$axios
        .get(
          `/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}`
        )
        .then(res => {
          console.log(res.data);
          this.shops = res.data;
        });
    },
    intoShop(shop) {
      //console.log(shop);
      this.$store.dispatch("setshopMsgAsync", shop);
      this.$router.replace("/singleshop");
    }
  }
};
</script>

<style scoped>
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.msite {
  width: 100%;
}
.msite_nav {
  margin-top: 20px;
  height: 200px;
  background: #fff;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.link_to_food {
  width: 25%;
  text-decoration: none;
}
.food_container {
  display: block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-size: 0;
}
img {
  display: inline-block;
  width: 50px;
  height: 50px;
}
.link_to_food span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #666;
}
.msite_shop_list {
  position: relative;
  margin-top: 10px;
  background: #fff;
}
.msite_shop_list::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
}
.shop_header {
  padding: 10px 10px 0;
}
.shop_icon {
  margin-left: 5px;
  color: #999;
}
.shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
.shop_container {
  margin-bottom: 50px;
}
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
ul,
li {
  padding: 0;
  margin: 0;
}
li {
  padding: 16px 9px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
li > img {
  height: 63px;
  width: 63px;
  float: left;
  margin-right: 10px;
}
p {
  margin: 0;
  padding: 0;
}
.one,
.two,
.threeDiv {
  float: right;
  width: 79%;
}
.one p:first-child {
  float: left;
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.one p:last-child {
  float: right;
  width: 40%;
}
.brand {
  font-size: 10px;
  line-height: 12px;
  color: #333;
  background-color: #ffd930;
  padding: 2px 2px;
  border-radius: 2px;
  margin-right: 4px;
}
.shopname {
  font-size: 15px;
  font-weight: bold;
}
.three {
  font-size: 11px;
  color: #999;
  padding: 1px;
  line-height: 22px;
  float: right;
}
.two,
.threeDiv {
  display: flex;
  justify-content: space-between;
}
.two .star {
  width: 10px;
  height: 10px;
}
.two p:first-child span {
  font-size: 9px;
  color: #666;
  line-height: 24px;
}
.two p:last-child span:first-child {
  font-size: 8px;
  background: #3190e8;
  padding: 0px 2px 0;
  color: white;
  border: 1px solid #3190e8;
  border-radius: 1px 1px;
  margin-right: 2px;
}
.two p:last-child span:last-child {
  font-size: 8px;
  color: #3190e8;
  padding: 0px 2px 0;
  border: 1px solid #3190e8;
  border-radius: 1px 1px;
}
.threeDiv p {
  font-size: 12px;
  color: #666;
}
.threeDiv p:last-child {
  color: #999;
}
.threeDiv p:last-child span {
  color: #3190e8;
}
</style>