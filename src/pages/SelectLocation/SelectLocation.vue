<template>
  <div>
    <keep-alive>
      <HeaderTop :title="cityname">
        <span class="header_search" slot="left" @click="$router.back()">
          <i class="iconfont icon-jiantou2"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text">切换城市</span>
        </span>
      </HeaderTop>
    </keep-alive>

    <form action method="post">
      <input type="text" v-model="keyword" placeholder="输入学校、商务楼，地址" />
      <p @click.prevent="submit">提交</p>
    </form>
    <ul class="message">
      <li
        @click="chooseStreet(index)"
        v-for="(singleAddress,index) in addressMessages"
        :key="index"
      >
        <p>{{singleAddress.name}}</p>
        <p>{{singleAddress.address}}</p>
      </li>
    </ul>

    <div class="history" :class="{block:block}">
      <p>搜索历史</p>
      <ul>
        <li
          v-for="(historyMessage,index) in historyMessages"
          @click="fromhistory(historyMessage)"
          :key="index"
        >
          <p>{{historyMessage.name}}</p>
          <p>{{historyMessage.address}}</p>
        </li>
      </ul>
      <p class="delete" :class="{pblock:pblock}" @click="delData(historyMessages)">清空所有</p>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    HeaderTop
  },
  //computed: mapGetters(["cityMessage"]),
  computed: {
    ...mapGetters(["historyMessages"]),
    cityMessage: {
      get() {
        return this.$store.getters.cityMessage;
      }
    }
  },
  data() {
    return {
      cityname: "",
      keyword: "",
      cityId: "",
      addressMessages: [],
      block: false,
      pblock: false,
      history: {
        name: "",
        address: ""
      }
    };
  },
  mounted() {
    console.log(this.cityMessage.name);
    console.log(this.cityMessage.id);
    this.cityname = this.cityMessage.name;
    this.cityId = this.cityMessage.id;
    if (this.historyMessages.length == 0) {
      this.pblock = true;
    } else {
      this.pblock = false;
    }
  },
  methods: {
    ...mapActions(["setDelhistoryAsync"]),
    submit() {
      //console.log(this.keyword);
      this.$axios
        .get(
          `v1/pois?city_id=${this.cityId}&keyword=${this.keyword}&type=search`
        )
        .then(res => {
          console.log(res.data);
          this.addressMessages = res.data;
          this.keyword = "";
        });
      this.block = true;
    },
    chooseStreet(index) {
      this.history.name = this.addressMessages[index].name;
      this.history.address = this.addressMessages[index].address;
      this.history.geohash = this.addressMessages[index].geohash;
      // console.log(
      //   this.history.name,
      //   this.history.address,
      //   this.history.geohash
      // );
      this.$store.dispatch("setAddhistoryAsync", this.history);
      this.$router.replace("/msite");
    },
    delData(historyMessages) {
      this.$store.dispatch("setDekhistoryAsync", historyMessages);
      this.pblock = true;
    },
    fromhistory(historyMessage) {
      //console.log(historyMessage);
      this.history.name = historyMessage.name;
      this.history.address = historyMessage.address;
      this.$store.dispatch("setAddhistoryAsync", this.history);
      this.$router.replace("/msite");
    }
  }
};
</script>

<style scoped>
form {
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding-top: 10px;
  width: 100%;
  text-align: center;
  margin-top: 55px;
}
form input {
  margin: 0 0 9px;
  padding: 8px 7px;
  width: 85%;
  border: 1px solid #e4e4e4;
  font-size: 16px;
  color: #666;
  margin-bottom: 13px;
  outline: none;
}
form p {
  width: 85%;
  margin: 0 auto;
  border: 1px solid #e4e4e4;
  background: #3190e8;
  padding: 8px 7px;
  color: #fff;
  margin-bottom: 13px;
}

.message,
.message > li {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
}
ul {
  background: #fff;
}
li {
  border-top: 1px solid #e6e6e6;
}
li p:nth-child(odd) {
  font-size: 15px;
  color: #333;
  margin: 15px 19px 8px;
}
li p:nth-child(even) {
  font-size: 11px;
  color: #999;
  margin: 0 19px 13px;
}
.history p {
  color: #333;
  font-size: 11px;
  padding-left: 11px;
  margin: 0;
}
.history ul {
  padding: 0;
  margin: 0;
}
.history li:last-child p:last-child {
  margin-bottom: 0;
}
.history .delete {
  font-size: 16px;
  color: #666;
  text-align: center;
  line-height: 32px;
  background-color: #fff;
  padding: 6px 0;
  margin: 0;
  border-top: 1px solid #e6e6e6;
}
div.block,
.pblock {
  display: none;
}
</style>