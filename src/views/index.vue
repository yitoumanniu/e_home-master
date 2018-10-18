<template>
    <div class="container" >
        <div class="header clearfix">
            <div class="header-left fll">
                <img src="@/assets/logo.png" alt="" style="width:130px" >
            </div>
             <div class="header-right flr">
                <!-- <a href="">登录</a> -->
                <router-link to="/login">
                  登录
                </router-link>
            </div>
            
        </div>

        <!-- 轮播图开始 -->
       <div class="swipe-warp">
          <mt-swipe :auto="4000" class="msw">
            <mt-swipe-item v-for="item in swiperDate" :key="item.id">
              <router-link to="/">
                <img :src="item.imgUrl" alt="图片丢失" class="img">
                <div class="desc">{{item.title}}</div>
              </router-link>
            </mt-swipe-item>
          </mt-swipe>
       </div>
       <!-- 轮播图结束 -->

       <!-- 菜单栏开始 -->
      <div class="main-menu">
        <div class="row">
          <router-link to='/newseye' class="menu-item">
              <div>
                <img src="@/assets/icon_01.png" alt="">
              </div>
              <div class="menu-btu-title">
                  信工新闻眼
              </div>
          </router-link>
           <router-link to='/' class="menu-item">
              <div>
                <img src="@/assets/icon_03.png" alt="">
              </div>
              <div class="menu-btu-title">
                  掌上组织生活
              </div>
          </router-link>
           <router-link to='/' class="menu-item">
              <div>
                <img src="@/assets/icon_05.png" alt="">
              </div>
              <div class="menu-btu-title">
                  党员云互动
              </div>
          </router-link>
        </div>

        <div class="row">
          <router-link to='/' class="menu-item">
              <div>
                <img src="@/assets/icon_04.png" alt="">
              </div>
              <div class="menu-btu-title">
                  党建一点通
              </div>
          </router-link>
           <router-link to='/' class="menu-item">
              <div>
                <img src="@/assets/icon_06.png" alt="">
              </div>
              <div class="menu-btu-title">
                  党员亮身份
              </div>
          </router-link>
           <router-link to='/' class="menu-item">
              <div>
                <img src="@/assets/icon_02.png" alt="">
              </div>
              <div class="menu-btu-title">
                  党史上的今天
              </div>
          </router-link>
        </div>
      </div>
       <!-- 菜单栏结束 -->
       <!-- 中间图片开始 -->
          <div class="banner">
            <img src="@/assets/banner01.png" alt="">
          </div>
       <!-- 中间图片结束 -->

       <!-- footer开始 -->
          <div class="footer-menu">
            <div class="menu-left">

            </div>
            <div class="menu-right">
              <div class="row">
                <router-link to="/"></router-link>
                <router-link to="/"></router-link>
              </div>
              <div class="row">
                <router-link to="/"></router-link>
                <router-link to="/"></router-link>
              </div>
            </div>
          </div>

       <!-- footer结束 -->
       <tabs></tabs>
    </div>
</template>

<script>
import "@/style/init.css";
import { Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/style.css";
import Vue from "vue";
import tabs from "@/components/tabs.vue"
export default {
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem,
    tabs,

  },
  data() {
    return {
      
      swiperDate:[

      ]

    };
  },

  created() {
    fetch(
      "http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.swiperDate = data.rows
      })
      

  },

};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>

<style scoped>
.header {
  background: #ca000d;
  width: 7.5rem;
  height: 45px;
}
.header-left {
  height: 45px;
  width: 1.31rem;
  /* float: left; */
}
.header-left img {
  margin-bottom: 15px;
  margin-left: 5px;
}

.header-right a {
  font-size: 17px;
  display: block;
  height: 45px;
  line-height: 45px;
  margin-right: 5px;
  text-decoration: none;
  color: #fff;
  font-weight: 100;
}
.swipe-warp {
  height: 218px;
  width: 7.5rem;
}
.msw {
  width: 7.5rem;
}
.img {
  width: 7.5rem;
  height: 218px;
}
.desc {
  font-size: 12px;
  font-weight: 300;
  opacity: 0.6;
  padding: 5px;
  height: 20px;
  line-height: 20px;
  width: 7.5rem;
  color: #fff;
  background: #000;
  position: absolute;
  bottom: 0;
  right: 20;
}

/* 主菜单开始 */
.main-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: url("../assets/bt_bg.png") no-repeat;
  background-size: 100%;
  height: 3.94rem;
  width: 7.5rem;
  /* margin-top: 26px; */
}
.row {
  display: flex;
}
.row .menu-item {
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  color: #8b7c8d;
  flex: 1;
}
.row img {
  width: 1rem;
  height: 1rem;
}
/* 主菜单结束 */
.banner img{
  height: 1.8rem;
  width: 7.5rem;
  display: block;
}
/* footer开始 */
.footer-menu{
  display: flex;
  background: url("../assets/zhuanlan.png") no-repeat;
  height: 3.3rem;
  background-size: 100%;
}
.menu-left{
flex:1;
}
.menu-right{
flex:2;
}
.footer-menu .menu-right .row{
  display: flex;
  height: 50%;
}
.footer-menu .menu-right .row a{
  flex:1;
}
/* footer结束 */
</style>