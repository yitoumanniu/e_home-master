<template>
    <div class="wrap">
        <com-header></com-header>
        <tabs></tabs>
        <div class="content-wrap">
            <div style="width:100% ; heigth:1px"></div>
            <div class="banner">
                <div class="img-wrap">
                    <img src="@/assets/头像@2x.png" alt="" class="header">
                </div>
                <div class="no-login">
                    <router-link to="/login">你还没有登录，请登录</router-link>
                </div>
            </div>

            <!-- 底部列表开始 -->
                <div class="list">
                    <router-link to="/login" class="item">
                        <img src="@/assets/个人信息.png" alt=""  class="fll icon-left">
                            <span>个人信息</span>
                        <img src="@/assets/形状-7-拷贝-5@2x.png" alt=""  class="flr icon-right">
                    </router-link>
                     <router-link to="/login" class="item">
                        <img src="@/assets/量化积分icon.png" alt=""  class="fll icon-left">
                            <span>个人信息</span>
                        <img src="@/assets/形状-7-拷贝-5@2x.png" alt=""  class="flr icon-right">
                    </router-link>
                     <router-link to="/login" class="item">
                        <img src="@/assets/修改密码icon.png" alt=""  class="fll icon-left">
                            <span>个人信息</span>
                        <img src="@/assets/形状-7-拷贝-5@2x.png" alt=""  class="flr icon-right">
                    </router-link>
                     <router-link to="/login" class="item">
                        <img src="@/assets/量化积分icon.png" alt=""  class="fll icon-left">
                            <span>个人信息</span>
                        <img src="@/assets/形状-7-拷贝-5@2x.png" alt=""  class="flr icon-right">
                    </router-link>
                    
                </div>
        </div>
         <tabs></tabs>
       
    </div>
</template>

<script>
import comHeader from "@/components/com-header.vue";
import tabs from "@/components/tabs.vue";
export default {
  components: {
    comHeader,
    tabs
  }
};
</script>

<style scoped lang="scss">
    @import "../style/myparty.scss";
    @import "../style/init.css";
</style>