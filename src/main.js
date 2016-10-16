import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import BlogDetail from './components/BlogDetail'
import PersonalInfo from './components/PersonalInfo'
import VueRouter from 'vue-router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter({
  transitionOnLoad: false
  // routes:[
  //   {
  //     path:'/',
  //     component: Home
  //   },
  //   {
  //     path:'/blog',
  //     component: BlogDetail
  //   },
  //   {
  //     path:'/personalinfo',
  //     component: PersonalInfo
  //   }
  // ]
})

import { sync } from 'vuex-router-sync'
import store from '../vuex/store'

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

/**
 * sync router loading status
 */
const commit = store.commit || store.dispatch
router.beforeEach(({ to, from, next }) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex) {
      commit('UPDATE_DIRECTION', 'forward')
    } else {
      commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    commit('UPDATE_DIRECTION', 'forward')
  }
  commit('UPDATE_LOADING', true)
  setTimeout(next, 50)
})
router.afterEach(() => {
  commit('UPDATE_LOADING', false)
})

sync(store, router)

router.map({
  '/': {
    component: Home,
    name:'/'
  },
  '/blog':{
    component:BlogDetail,
    name:'blog'
  },
  '/personalinfo':{
    component:PersonalInfo,
    name:'person'
  }
})

// router.beforeEach(function (transition) {
//   if (/\/http/.test(transition.to.path)) {
//     let url = transition.to.path.split('http')[1]
//     window.location.href = `http${url}`
//   } else {
//     router.go({
//       path:router
//     })
//     // if (/\/demo\/component\/\w+/.test(transition.to.path)) {
//     //   router.go({
//     //     replace: true,
//     //     path: transition.to.path.replace('/demo', ''),
//     //     append: false
//     //   })
//     // } else {
//     //   transition.next()
//     // }
//   }
// })

if(module.hot) {
  module.hot.accept();
}

router.start(App, '#app')

