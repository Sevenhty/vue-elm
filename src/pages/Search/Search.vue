<template>
  <section class="search">
    <header class="header">
      <a class="header_title">
        <span class="header_title_text">搜索</span>
      </a>
    </header>
    <form class="search_form clearfix" action="#">
      <input
        type="search"
        name="search"
        placeholder="请输入商家或美食名称"
        class="search_input"
        v-model="keyword"
      />
      <span class="submit" @click="submit">提交</span>
    </form>
    <div class="shops" v-if="keyword">
      <p>商家</p>
      <ul>
        <li v-for="(shop,index) in shops" :key="index" @click="intoShop(shop)">
          <img :src="'//elm.cangdu.org/img/'+shop.image_path" />
          <p>{{shop.name}}</p>
          <p>月售 {{shop.recent_order_num}}单</p>
          <p class="lastp">
            {{shop.float_minimum_order_amount}} 元起送 /
            距离{{shop.distance}}公里
          </p>
        </li>
      </ul>
    </div>
    <div class="searchHistory" v-else>
      <p>搜索历史</p>
      <ul>
        <li v-for="(searchShop,index) in searchShops" :key="index">
          <p>{{searchShop}}</p>
          <p @click="delShop(index)">×</p>
        </li>
      </ul>
      <p class="delAll" @click="deleteAll(searchShops)">清空搜索历史</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["historyMessages", "searchShops"]),
  mounted() {
    this.localGeohash = this.historyMessages[0].geohash;
    console.log(this.localGeohash);
    //console.log(this.historyMessages);
  },
  data() {
    return {
      localGeohash: "",
      keyword: "",
      shops: []
    };
  },
  methods: {
    submit() {
      //console.log(this.keyword);
      this.$axios
        .get(
          `v4/restaurants?geohash=${this.localGeohash}&keyword=${this.keyword}`
        )
        .then(res => {
          //console.log(res.data);
          this.shops = res.data;
          this.$store.dispatch("setAddsearchShopsAsync", this.keyword);
          //console.log(this.searchShops);
        });
    },
    delShop(index) {
      this.$store.dispatch("setDelSingleShopAsync", index);
    },
    deleteAll(searchShops) {
      this.$store.dispatch("setDelAllShopsAsync", searchShops);
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
.search {
  width: 100%;
}
.header {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
.header_title_text {
  color: #fff;
  font-size: 20px;
}
.search_form {
  margin-top: 45px;
  background-color: #fff;
  padding: 12px 8px;
}
input {
  height: 35px;
  padding: 0 4px;
  border-radius: 2px;
  font-weight: bold;
  outline: none;
}
.search_input {
  float: left;
  width: 79%;
  border: 4px solid #f2f2f2;
  font-size: 14px;
  color: #333;
  background-color: #f2f2f2;
}
.submit {
  float: right;
  width: 18%;
  border: 4px solid #3190e8;
  font-size: 16px;
  color: #fff;
  background-color: #3190e8;
  text-align: center;
  padding: 3px 0;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
}
li {
  padding: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
li > img {
  height: 65px;
  width: 65px;
  float: left;
  margin-right: 10px;
}
p {
  margin: 0;
  padding: 0;
}
.shops li p {
  font-size: 13px;
  color: #333;
  padding: 3px 0;
}
.shops > p {
  font-size: 14px;
  font-weight: bold;
  color: #666;
  padding: 13px 15px 13px 13px;
}
.searchHistory li {
  display: flex;
  justify-content: space-between;
}
.searchHistory > p {
  font-size: 14px;
  font-weight: bold;
  color: #666;
  padding: 13px 15px 13px 13px;
}
.searchHistory > p.delAll {
  color: #3190e8;
  font-size: 16px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>