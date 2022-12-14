import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import ViewSong from '@/components/ViewSong/Index'
import Generate from '@/components/Generate'
import recentlyViewed from '@/components/recentlyViewed'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/generate',
      name: 'generate',
      component: Generate
    },
    {
      path: '/recentlyViewed',
      name: 'recentlyViewed',
      component: recentlyViewed
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '*',
      redirect: 'login'
    }
  ]
})
