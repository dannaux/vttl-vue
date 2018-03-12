import Vue from 'vue'
import Router from 'vue-router'
import RankBarList from '@/components/player/RankBarList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RankBarList',
      component: RankBarList
    }
  ]
})
