/* eslint-disable*/
/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store'

import Home from '@/components/Home/index'
import SignIn from '@/components/Signin/index'
import Dashboard from '@/components/Dashboard/index'
import MainDashboard from '@/components/Dashboard/main'
import AddPosts from '@/components/Dashboard/addPost'
import PostLists from '@/components/Dashboard/listPosts'

Vue.use(VueRouter);

const authGuard = {
  beforeEnter: (to, from, next) => {

    const redirect = () => {
      //if user token is set to true
      if (store.state.admin.token) {
        //if user is trying to go to signin 
        if (to.path === '/signin') {
          next('/dashboard')
        } else {
          next()
        }
      //if user token is set to false
      } else {
        //if user is trying to go to signin 
        if (to.path === '/signin') {
          next()
        } else {
          next('/')
        }
      }
    }    

    if (store.state.admin.refreshLoading) {
      //async to watch if refreshLoading value changes
      store.watch((state, getters) => getters['admin/refreshLoading'], () => {
        redirect();
      })
    } else {
      redirect();
    }
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
    ...authGuard
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    ...authGuard,
    children: [
      {
        path: '/',
        component: MainDashboard
      },
      {
        path: 'add_posts',
        component: AddPosts
      },
      {
        path: 'posts_list',
        component: PostLists
      }
    ]
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
