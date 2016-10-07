import Vue from 'vue'
import App from './App'
import Home from './components/HelloFromVux'
import BlogDetail from './components/BlogDetail'
import PersonalInfo from './components/PersonalInfo'
import VueRouter from 'vue-router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/blog':{
    component:BlogDetail
  },
  '/personalinfo':{
    component:PersonalInfo
  }
})

if(module.hot) {
  module.hot.accept();
}

router.start(App, '#app')

