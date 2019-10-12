<template>
  <div class="container">
    <HeaderTop>
      <span class="header_search" slot="left">ele.me</span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <div class="title">
      <p>当前定位城市：</p>
      <p>定位不准确，请在城市列表中选择</p>
    </div>
    <p class="currentLocation" @click="jumpWebsite(taiYuan.id)">
      <span>{{taiYuan.name}}</span>
      <span>
        <i class="iconfont icon-jiantou1"></i>
      </span>
    </p>
    <div class="hotCity">
      <p>热门城市</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(hotCity.id)"
          v-for="(hotCity,index) in hotCities"
          :key="index"
        >{{hotCity.name}}</li>
      </ul>
    </div>
    <div class="allCity">
      <p>
        A
        <span>(按字母排序)</span>
      </p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Acity.id)"
          v-for="(Acity,index) in allCities.A"
          :key="index"
        >{{Acity.name}}</li>
      </ul>
      <p>B</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Bcity.id)"
          v-for="(Bcity,index) in allCities.B"
          :key="index"
        >{{Bcity.name}}</li>
      </ul>
      <p>C</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Ccity.id)"
          v-for="(Ccity,index) in allCities.C"
          :key="index"
        >{{Ccity.name}}</li>
      </ul>
      <p>D</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Dcity.id)"
          v-for="(Dcity,index) in allCities.D"
          :key="index"
        >{{Dcity.name}}</li>
      </ul>
      <p>E</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Ecity.id)"
          v-for="(Ecity,index) in allCities.E"
          :key="index"
        >{{Ecity.name}}</li>
      </ul>
      <p>F</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Fcity.id)"
          v-for="(Fcity,index) in allCities.F"
          :key="index"
        >{{Fcity.name}}</li>
      </ul>
      <p>G</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Gcity.id)"
          v-for="(Gcity,index) in allCities.G"
          :key="index"
        >{{Gcity.name}}</li>
      </ul>
      <p>H</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Hcity.id)"
          v-for="(Hcity,index) in allCities.H"
          :key="index"
        >{{Hcity.name}}</li>
      </ul>
      <p>J</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Jcity.id)"
          v-for="(Jcity,index) in allCities.J"
          :key="index"
        >{{Jcity.name}}</li>
      </ul>
      <p>K</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Kcity.id)"
          v-for="(Kcity,index) in allCities.K"
          :key="index"
        >{{Kcity.name}}</li>
      </ul>
      <p>L</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Lcity.id)"
          v-for="(Lcity,index) in allCities.L"
          :key="index"
        >{{Lcity.name}}</li>
      </ul>
      <p>M</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Mcity.id)"
          v-for="(Mcity,index) in allCities.M"
          :key="index"
        >{{Mcity.name}}</li>
      </ul>
      <p>N</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Ncity.id)"
          v-for="(Ncity,index) in allCities.N"
          :key="index"
        >{{Ncity.name}}</li>
      </ul>
      <p>P</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Pcity.id)"
          v-for="(Pcity,index) in allCities.P"
          :key="index"
        >{{Pcity.name}}</li>
      </ul>
      <p>Q</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Qcity.id)"
          v-for="(Qcity,index) in allCities.Q"
          :key="index"
        >{{Qcity.name}}</li>
      </ul>
      <p>R</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Rcity.id)"
          v-for="(Rcity,index) in allCities.R"
          :key="index"
        >{{Rcity.name}}</li>
      </ul>
      <p>S</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Scity.id)"
          v-for="(Scity,index) in allCities.S"
          :key="index"
        >{{Scity.name}}</li>
      </ul>
      <p>T</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Tcity.id)"
          v-for="(Tcity,index) in allCities.T"
          :key="index"
        >{{Tcity.name}}</li>
      </ul>
      <p>W</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Wcity.id)"
          v-for="(Wcity,index) in allCities.W"
          :key="index"
        >{{Wcity.name}}</li>
      </ul>
      <p>X</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Xcity.id)"
          v-for="(Xcity,index) in allCities.X"
          :key="index"
        >{{Xcity.name}}</li>
      </ul>
      <p>Y</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Ycity.id)"
          v-for="(Ycity,index) in allCities.Y"
          :key="index"
        >{{Ycity.name}}</li>
      </ul>
      <p>Z</p>
      <ul class="clearfix">
        <li
          @click="jumpWebsite(Zcity.id)"
          v-for="(Zcity,index) in allCities.Z"
          :key="index"
        >{{Zcity.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  data() {
    return {
      hotCities: [],
      allCities: {},
      taiYuan: {}
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    jumpWebsite(id) {
      this.$axios.get(`v1/cities/${id}`).then(res => {
        console.log(res.data);
        this.$store.dispatch("setcityMessageAsync", res.data);
        this.$router.push("/selectlocation");
      });
    }
  },
  mounted() {
    this.$axios.get("v1/cities?type=hot").then(res => {
      //console.log(res.data);
      this.hotCities = res.data;
    });
    this.$axios.get("v1/cities?type=group").then(res => {
      //console.log(res.data);
      this.allCities = res.data;
    });
    this.$axios.get("v1/cities/43").then(res => {
      //console.log(res.data);
      this.taiYuan = res.data;
    });
  }
};
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
.header_search {
  color: white;
}
.title {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  line-height: 1.5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
}
.title p:first-child {
  font-size: 13px;
  color: #666;
}
.title p:last-child {
  font-size: 13px;
  color: #9f9f9f;
}
.icon-jiantou1 {
  font-size: 25px;
  color: #000;
}
.currentLocation {
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
  background: #fff;
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.currentLocation span:first-child {
  font-size: 17px;
  color: #3190eb;
}
.currentLocation span > i {
  font-size: 13px;
  color: #000;
}
.hotCity {
  background: #fff;
  margin-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
.hotCity p {
  font-size: 13px;
  color: #666;
  padding: 10px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
}
.hotCity ul,
.hotCity ul li,
.allCity ul,
.allCity ul li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.hotCity ul li,
.allCity ul li {
  float: left;
  text-align: center;
  color: #3190e8;
  box-sizing: border-box;
  border-bottom: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  width: 25%;
  font: 14px/1.75 Microsoft YaHei;
  background: #fff;
  padding: 7.5px 0;
}
.hotCity ul li:nth-child(4n),
.allCity ul li:nth-child(4n) {
  border-right: none;
}
.allCity {
  margin-top: 10px;
}
.allCity p {
  font-size: 13px;
  color: #666;
  padding: 10px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  background: #fff;
}
.allCity ul li {
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #fff;
}
.allCity ul {
  margin-bottom: 10px;
}
</style>