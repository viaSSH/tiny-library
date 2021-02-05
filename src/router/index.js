import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import BookDetail from '../views/BookDetail.vue'
import Search from '../views/Search.vue'
// import MovieDetail from '../views/MovieDetail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: BookDetail
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  // {
  //   path: '/detail/:id',
  //   name: 'Detail',
  //   component: MovieDetail
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
