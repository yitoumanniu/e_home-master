import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
// import login from '@/views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/login',
      name: 'login',
      meta:{
        title:"登录"
      },
      component: () => import("@/views/login")
    },
    {
      path:'/inform',
      name:'inform',
      meta:{
        title:"通知早知道"
      },
      component: () => import("@/views/inform")
    },
    {
      path:'/party',
      name:'myparty',      
      meta:{
        title:"我的党建"
      },
      component: ()=> import("@/views/myparty")
    },
    {
      path:'/newseye',
      name:'newseye',
      meta:{
        title:"信工新闻眼"
      },
      component: ()=> import("@/views/newseye")

    }
  ]
})
