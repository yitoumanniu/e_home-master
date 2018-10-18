/* <template>
    <div>
        <comHeader></comHeader>   
         <div v-for="item in formData" :key="item.newsId">
             <router-link to="/">
                <div class="list-warp">
                <div class="img-warp">
                    <img :src="item.pic" alt="">
                </div>
                <div class="content-warp">
                    <div class="content">{{item.title}}</div>
                    <div class="time">{{item.currentTime}}</div>
                </div>
            </div>  
            </router-link>
         </div>
         <tabs></tabs>
    </div>
</template>

<script>
import comHeader from "@/components/com-header.vue";
import "@/style/inform.scss";
import tabs from "@/components/tabs"
export default {
  components: {
    comHeader,
    tabs
  },
  data(){
      return{
          formData:[
              
          ]
      }
  },

  created() {
    fetch(
      "http://211.67.177.56:8080/hhdj/news/newsList.do?page=1&rows=10&type=2"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.formData = data.rows
      });
  }
};
</script>

<style scoped>
</style> */