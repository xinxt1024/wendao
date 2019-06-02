import Vue from 'vue';

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Msite from '../pages/home/Msite'
import News from '../pages/news/News'
import Course from '../pages/course/Course'

export default new VueRouter({
    mode:'hash',
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: '/home',
            component:Msite
        },
        {
            path: '/course',
            component:Course
        },
        {
          path: '/news',
          component:News
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})