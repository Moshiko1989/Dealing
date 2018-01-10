import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '../pages/HomePage.vue';
import DealInfo from '../pages/dealinfo.vue';
import Profile from '../pages/Profile.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/dealinfo/:dealId',
      name: 'DealInfo',
      component: DealInfo
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
