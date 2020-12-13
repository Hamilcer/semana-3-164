import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/auth/TheLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta:{
      requiresAuth: true
    }
  },
  // {
  //   path: '/services',
  //   name: 'Services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
    // children: [
    //   {
    //     path: '/asesoria',
    //     name: 'Asesoria',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "asesoria" */ '../views/Asesoria.vue')
    //   }
    // ]
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('jwt')===null){
      next({
        path: '/'
      })
    }else{
      next();
    }
  }else{
    next();
  }
})



export default router
