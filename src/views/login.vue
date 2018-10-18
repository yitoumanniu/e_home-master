<template>
    <div class="login">
        <com-header></com-header>
       
         <!-- 中间图片开始 -->
            <div class="wrap">
                <img src="@/assets/logo.png" alt="" class="logo-wrap">
            </div>
        <!-- 中间图片结束 -->

            <form action="" class="form-warp">
                <div class="input-warp">
                    <input type="text" placeholder="身份证号" style="outline:none" >
                </div>
                <div class="input-warp">
                    <input type="text" placeholder="密码" style="outline:none">
                </div>
                <div class="input-warp">
                    <mt-button type="danger" class="btn">登录</mt-button>
                </div>
            </form>
    </div>
</template>

<script>
import comHeader from "@/components/com-header.vue"
    export default {
        components:{
          comHeader,
        }
    }
</script>

<style scoped lang="scss">
@import '../style/login.scss'
</style>