<template>
  <div class="wrap">
    <div class="head">
      <img :src="src" class="bg" />
      <i class="iconfont icon-jiantou2" @click="$router.replace('/msite')"></i>
      <img :src="src" class="portrait" />
      <p class="shopName">{{this.shopMsg.name}}</p>
      <p class="sameP">商家配送 / 分钟送达 / 配送费￥0</p>
      <p class="sameP">公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
      <p class="bottomP">
        <span>
          <span
            style="display:inline-block;padding:0 1px;background:#f07373"
          >{{this.shopMsg.activities[0].icon_name}}</span>
          {{this.shopMsg.activities[0].description}}
        </span>

        <!-- <span>
          <span>减</span> 满30减5，满60减8(APP专享)
        </span>-->

        <span>
          {{this.shopMsg.activities.length}}个活动
          <span class="lastj">></span>
        </span>
        <!-- <span>
          1个活动
          <span class="lastj">></span>
        </span>-->
      </p>
    </div>
    <div class="content">
      <p class="firstP">
        <a href="#" @click="show=true" :class="{aStyle:show}">商品</a>
        <a href="#" @click="show=false" :class="{aStyle:!show}">评价</a>
      </p>
      <div class="shopContent" :class="{on:!show}">
        <div class="leftFood">
          <div
            class="categroy"
            v-for="(Foods,index) in AllFoods"
            :key="index"
            @click="move(index)"
          >{{Foods.name}}</div>
        </div>

        <ul class="rightFood">
          <li v-for="(Foods,index) in AllFoods" :key="index" class="categroyFood">
            <div class="headP clearfix">
              <p>{{Foods.name}}</p>
              <p>{{Foods.description}}</p>
            </div>
            <ul>
              <li v-for="(food,index) in Foods.foods" :key="index" class="singleFood">
                <img :src="'//elm.cangdu.org/img/' + food.image_path" />
                <p>{{food.name}}</p>
                <p>{{food.description}}</p>
                <p>月售{{food.rating_count}}单 好评率{{food.satisfy_rate}}%</p>
                <span v-if="food.activity">{{food.activity.image_text}}</span>
                <div class="consumption">
                  <div class="price">
                    <span>￥{{food.specfoods[0].price}}</span>
                    起
                  </div>
                  <div class="chooseStyle">
                    <div
                      v-if="food.specfoods.length>1"
                      @click="payCutFood(food,0)"
                      class="style1Div"
                    >
                      <div v-show="food.__v>0" class="style2-">-</div>
                      <span v-show="food.__v>0" class="count">{{food.__v}}</span>
                      <div class="style1" @click="appearDiv(food)">选规格</div>
                    </div>

                    <div v-else class="style2Div">
                      <div v-show="food.__v>0" @click="payCutFood(food,0)" class="style2-">-</div>
                      <span v-show="food.__v>0" class="count">{{food.__v}}</span>
                      <div class="style2" @click="payFood(food,0)">+</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <!-- 这是商品购物车 -->
        <div class="bottom">
          <div class="shoppingCar">
            <i class="iconfont icon-gouwuche"></i>
          </div>
          <div class="shoppingCar2" v-if="sumPrice > 0" @click="shoppingCar(menus)">
            <i class="iconfont icon-gouwuche"></i>
          </div>
          <p>￥ {{sumPrice}}</p>
          <p>配送费￥{{this.shopMsg.float_delivery_fee}}</p>
          <div
            class="send"
            v-if="this.sumPrice <this.shopMsg.float_minimum_order_amount"
          >还差￥{{this.shopMsg.float_minimum_order_amount}}起送</div>
          <div class="send2" v-else>去结算</div>
        </div>
      </div>

      <!-- 这是评论 -->
      <div class="shopComment" :class="{on:show}">这是评论</div>
    </div>
    <div class="cover" v-show="on">
      <div class="coverContent">
        <span @click="close">×</span>
        <h4>{{foodMsg.name}}</h4>
        <h5>规格</h5>
        <ul>
          <li
            v-for="(oneFood,index) in foodMsg.specfoods"
            :key="index"
            @click="choosePrice(foodMsg,index)"
          >{{oneFood.specs_name}}</li>
        </ul>
        <div class="bottomDiv">
          <div>￥{{foodPrice}}</div>
          <div @click="payFood(foodMsg,foodIndex)">加入购物车</div>
        </div>
      </div>
    </div>
    <!-- 结算页面 -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["shopMsg", "sumPrice"]),
  components: {},
  mounted() {
    //console.log(this.shopMsg);
    this.src = `//elm.cangdu.org/img/${this.shopMsg.image_path}`;
    this.bgcolor = this.shopMsg.activities[0].icon_color;
    this.getFoods();
  },
  data() {
    return {
      show: true,
      onCar: false,
      src: "",
      bgcolor: "",
      AllFoods: [],
      on: false,
      foodMsg: "",
      foodPrice: "",
      foodIndex: "",
      menu: {
        name: "",
        price: "",
        msg: ""
      },
      menus: []
    };
  },
  methods: {
    getFoods() {
      this.$axios
        .get(`/shopping/v2/menu?restaurant_id=${this.shopMsg.id}`)
        .then(res => {
          console.log(res.data);
          this.AllFoods = res.data;
        });
    },
    move(index) {
      var leftDiv = document.querySelectorAll(".categroy");
      var rightUl = document.querySelector(".rightFood");
      var rightLi = document.querySelectorAll(".categroyFood");
      var sum = 0;
      //console.log(rightLi);
      for (var i = 0; i < index; i++) {
        sum += rightLi[i].scrollHeight;
      }
      //console.log(sum);
      //console.log(rightLi[index].scrollHeight);
      rightUl.style.transform = "translateY(" + -sum + "px)";
      rightUl.style.transition = "1.5s";
      for (var i = 0; i < leftDiv.length; i++) {
        leftDiv[i].style.background = "rgba(0,0,0,0.01)";
        leftDiv[i].style.border = "none";
        leftDiv[index].style.background = "white";
        leftDiv[index].style.borderLeft = "2px solid #3190E8";
      }
    },
    appearDiv(food) {
      this.on = true;
      this.foodMsg = food;
    },
    close() {
      this.on = false;
    },
    choosePrice(foodMsg, index) {
      this.foodPrice = foodMsg.specfoods[index].price;
      this.foodIndex = index;
      var FoodLi = document.querySelectorAll(".coverContent li");
      for (var i = 0; i < FoodLi.length; i++) {
        FoodLi[i].style.color = "black";
        FoodLi[index].style.color = "#3199E8";
      }
    },
    payFood(foodMsg, foodIndex) {
      console.log(foodMsg.specfoods[foodIndex].price);
      console.log(foodIndex);
      this.$store.dispatch(
        "setAddsumPriceAsync",
        foodMsg.specfoods[foodIndex].price
      );
      this.on = false;
      foodMsg.__v++;
      this.menu.name = foodMsg.name;
      this.menu.price = foodMsg.specfoods[foodIndex].price;
      this.menu.msg = foodMsg.specfoods[foodIndex].specs_name;
      //console.log("点餐个数:" + foodMsg.__v);
      this.menus.push(this.menu);
      console.log(this.menus);
    },
    payCutFood(food, index) {
      this.$store.dispatch("setCutsumPriceAsync", food.specfoods[index].price);
      if (this.sumPrice <= 0) {
        this.sumPrice = 0;
      }
      food.__v--;
      //console.log("点餐个数:" + food.__v--);
    },
    shoppingCar(menus) {
      this.onCar = !this.onCar;
    }
  }
};
</script>

<style scoped>
.wrap {
  height: 100%;
  width: 100%;
}
.head {
  width: 100%;
  height: 18%;
  overflow: hidden;
  position: relative;
  background-color: rgba(119, 103, 137, 0.43);
}
.head > i {
  color: white;
  font-size: 20px;
  z-index: 2;
  position: absolute;
}
.bg {
  height: 200%;
  width: 200%;
  opacity: 0.35;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
.portrait {
  position: absolute;
  width: 20%;
  top: 10%;
  left: 3%;
}
p {
  margin: 0;
  padding: 0;
  color: #fff;
}
.shopName {
  position: relative;
  z-index: 9;
  margin-left: 24%;
  font-size: 20px;
  margin-top: 4%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sameP {
  position: relative;
  z-index: 9;
  margin-left: 24%;
  padding-top: 3px;
  font-size: 11px;
}
.bottomP {
  position: relative;
  z-index: 9;
  margin: 10px 15px 0 15px;
  padding-top: 3px;
  font-size: 11px;
  display: flex;
  justify-content: space-between;
}
.lastj {
  position: relative;
  z-index: 9;
  color: #fff;
  font-size: 15px;
  padding: 7px;
}
.firstP {
  padding: 7px 0 14px;
  display: flex;
  justify-content: space-around;
  background: #fff;
}
.firstP a {
  color: #333;
  text-decoration: none;
  padding: 7px 0 2px;
}
.on {
  display: none;
}
.firstP a.aStyle {
  color: #3190e8;
  border-bottom: 2px solid #3190e8;
}
.bottom {
  position: fixed;
  bottom: 0;
  height: 7%;
  width: 100%;
  background: #333;
  z-index: 4;
}
.shoppingCar {
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background: #333;
  text-align: center;
  line-height: 55px;
  position: fixed;
  bottom: 13px;
  left: 15px;
}
.shoppingCar2 {
  border: 2px solid #333;
  box-sizing: border-box;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background: #3190e8;
  text-align: center;
  line-height: 55px;
  position: fixed;
  bottom: 13px;
  left: 15px;
}
.shoppingCar > i,
.shoppingCar2 > i {
  color: #fff;
  font-size: 33px;
}
.send {
  color: #fff;
  position: fixed;
  right: 0;
  padding: 13px;
  background: #535356;
  font-weight: bold;
}
.send2 {
  width: 20%;
  text-align: center;
  color: #fff;
  position: fixed;
  right: 0;
  padding: 13px;
  background: #4cd964;
  font-weight: bold;
}
.bottom p:first-of-type {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  position: fixed;
  left: 20%;
  padding: 3px 0;
}
.bottom p:last-of-type {
  font-size: 9px;
  color: #fff;
  position: fixed;
  left: 21%;
  bottom: 0;
  padding: 3px 0;
}
.shopContent {
  overflow: hidden;
}
.categroy {
  font-size: 14px;
  color: #333;
  padding: 16px 7px;
  /* background: #fff; */
  text-align: center;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.leftFood {
  float: left;
  width: 25%;
}
.rightFood {
  float: right;
  width: 75%;
  margin-bottom: 48px;
}
.headP {
  padding: 9px;
}
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
.headP p:first-of-type {
  font-size: 16px;
  color: #666;
  float: left;
  font-weight: bold;
  padding: 5px 0;
}
.headP p:last-of-type {
  margin-left: 5px;
  font-size: 12px;
  color: #999;
  float: left;
  padding-top: 10px;
}
.singleFood {
  background: #fff;
  padding: 14px 9px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.singleFood img {
  height: 47px;
  width: 47px;
  float: left;
}
.singleFood p {
  padding: 2px 0;
  margin-left: 55px;
}
.singleFood p:nth-of-type(1) {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  padding-top: 0;
}
.singleFood p:nth-of-type(2) {
  font-size: 11px;
  color: #999;
  font-weight: bold;
}
.singleFood p:nth-of-type(3) {
  font-size: 11px;
  color: #333;
}
.singleFood > span {
  font-size: 10px;
  border: 1px solid rgb(240, 115, 115);
  color: rgb(241, 136, 79);
  margin-left: 55px;
  border-radius: 7px 7px;
}
.leftFood .categroy:first-child {
  border-left: 2px solid #3190e8;
  background: #fff;
}
.consumption {
  margin-left: 53px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
.price {
  color: #666;
  font-size: 12px;
}
.price > span {
  font-size: 16px;
  color: #ff6600;
}
.style1 {
  font-size: 13px;
  background: #3190e8;
  padding: 2.3px 4.6px;
  color: #fff;
  border-radius: 5px 5px;
}
.style2 {
  height: 18px;
  width: 18px;
  background: #3190e8;
  text-align: center;
  line-height: 18px;
  font-size: 16px;
  color: #fff;
  border-radius: 50%;
}
.style2- {
  height: 18px;
  width: 18px;
  background: #fff;
  text-align: center;
  line-height: 18px;
  font-size: 16px;
  color: #3190e8;
  border: 1px solid #3190e8;
  border-radius: 50%;
  box-sizing: border-box;
}
.style1Div,
.style2Div {
  display: flex;
  justify-content: space-around;
}
.count {
  font-size: 15px;
  color: #666;
  margin: 0 5px;
}
.cover {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  z-index: 2;
}
.coverContent {
  width: 262px;
  height: 200px;
  background: #fff;
  margin: 0 auto;
  margin-top: 210px;
  border-radius: 10px 10px;
}
.coverContent span {
  color: #333;
  font-size: 28px;
  position: fixed;
  top: 210px;
  right: 70px;
  z-index: 2;
}
.coverContent h4 {
  font-weight: 100;
  text-align: center;
  padding: 11.7px;
  color: black;
  margin: 0;
}
.coverContent h5 {
  font-size: 14px;
  padding-left: 11.7px;
  font-weight: 100;
  color: black;
  margin: 0;
}
.coverContent ul {
  padding: 11.7px;
}
.coverContent ul > li {
  float: left;
  font-size: 14px;
  padding: 7px 11px;
  margin: 0 11px 5px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px;
}
.bottomDiv {
  width: 100%;
  height: 54px;
  padding: 11.7px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
}
.bottomDiv div:last-child {
  color: #fff;
  background: #3199e8;
  padding: 2px 5px;
  line-height: 28px;
  border-radius: 5px 5px;
}
.car {
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  bottom: 0;
}
.menu {
  width: 100%;
  position: fixed;
  bottom: 45px;
  background: #eceff1;
  padding: 7px 14px;
  box-sizing: border-box;
}
.menu > p {
  display: flex;
  justify-content: space-between;
}
.menu > p span {
  font-size: 16px;
  color: #666;
}
</style>