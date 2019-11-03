/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/components/Home/index'
import SignIn from '@/components/Signin/index'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(from, to, savedPosition) {
    return {x:0,y:0}
  },
  routes
});

export default router;
