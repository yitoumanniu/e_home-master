<template>
    <div>
        <mt-header :title="title">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>   
        </router-link>
        </mt-header>  
    </div>
</template>

<script>
export default {
    computed:{
        title() {
            return this.$route.meta.title;
        }
    }
};
</script>

<style lang="scss">
    .mint-header{
        background-color: #c50206; 
        height: 50px;
        font-size: 16px;

        .mint-header-title{
            font-weight: 150;            
        }
    }
</style>