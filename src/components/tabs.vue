<template>
    <div class="tabs">
        <router-link class="tabs-item" to="/" :class="{active: $route.name === 'Index'}">
            <i class="iconfont icon-dangwugongkai"></i>
            <div class="title">首页</div>
        </router-link>
        <router-link class="tabs-item" to="/inform" :class="{active: $route.name === 'inform'}">
            <i class="iconfont icon-xiaoxi-"></i>
            <div class="title">通知早知道</div>
        </router-link>
        <router-link class="tabs-item" to="/party" :class="{active:$route.name === 'myparty'}">
            <i class="iconfont icon-wode01"></i>
            <div class="title">我的党建</div>
        </router-link>   
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.tabs{
    display: flex;
    align-items: center;
    height: 1.12rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #fafbfe;
    // border-top:1px solid #f1f1f1
    a{
        text-decoration: none;
    }
    .tabs-item{
        padding-top: 4px;
        flex: 1;
        height: 1rem;
        text-align: center
    }
    .iconfont{
        display: block;
        font-size: 26px;
        vertical-align: bottom;
    }
     .active{
         border-top: 2px solid #c7000a;
        color: #c7000a
    }
    .title{
        font-size: 12px;
    }
   
}
</style>