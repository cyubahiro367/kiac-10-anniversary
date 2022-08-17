import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Hotels from '../views/Hotels.vue'
import BecomeSponsor from '../views/SponsorRegistration.vue'
import ThankYou from '../views/ThankPage.vue'
import Sponsor from '../views/Sponsor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/hotels',
    name: 'Hotels',
    component: Hotels
  },
  {
    path: '/become-sponsor',
    name: 'BecomeSponsor',
    component: BecomeSponsor
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYou
  },
  {
    path: '/sponsor',
    name: 'Sponsor',
    component: Sponsor
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
