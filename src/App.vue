<template>
  <div id="app">
     <router-view/>
    
  </div>
</template>

<script>
import login from '@/views/login.vue'

export default {
  name: "App",
  components: {
    login
  }
};
</script>

<style>
.container{
  /* padding-top: 45px; */
  padding-bottom: 1.12rem;
}

</style>
