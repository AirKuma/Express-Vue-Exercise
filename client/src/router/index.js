import Vue from 'vue'
import List from '../components/List'
import createUser from '../components/users/create'
import editeUser from '../components/users/edit'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/user',
      name: 'createUser',
      component: createUser
    },
    {
      path: '/user/:userId',
      name: 'editeUser',
      component: editeUser
    }
  ]
})

