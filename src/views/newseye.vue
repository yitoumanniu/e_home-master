<template>
    <div>
        <com-header></com-header>
        <div class="news-list">
            <div v-for="item in formDate" :key="item.newsId" >
                <router-link to="/">
                    <div class="news-item">
                    <div class="img">
                        <img :src="item.pic" alt="">
                    </div>
                        <div class="content">
                            <h3 class="overflow">{{item.title}}</h3>
                            <div class="bottom-bar">
                                <span>{{item.currentTime}}</span>
                                <span class="counter flr">
                                    <i class="icon-yanjing">
                                        <img src="@/assets/12-eye.png" alt="">
                                    </i>
                                    <span>{{item.count}}</span>
                                </span>
                            </div>
                        </div>  
                    </div>
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import comHeader from "@/components/com-header.vue";
export default {
  components: {
    comHeader
  },
  data() {
    return {
      formDate:[]
    };
  },

  mounted() {
    this.axios
      .get(
        "http://211.67.177.56:8080/hhdj/news/newsList.do?page=1&rows=10&type=0"
      )
      .then(data => {
        console.log(data);
        this.formDate = data.data.rows
      });
  }
};
</script>

<style scoped lang="scss">
@import "../style/newseye.scss";
</style>