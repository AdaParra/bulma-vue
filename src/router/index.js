import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Cards/Project/Main'
import Projects from '@/components/Projects/Main'
import About from '@/components/About/Main'
import SignIn from '@/components/SignIn/Main'
import Login from '@/components/Login/Main'
import Donate from '@/components/Donate/Main'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Project/:id/detail', name: 'Project', component: Project, props: true },
    { path: '/Projects', name: 'Projects', component: Projects },
    { path: '/About', name: 'About', component: About },
    { path: '/SignIn', name: 'SignIn', component: SignIn },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/Donate/:id/detail', name: 'Donate', component: Donate, props: true }
  ]
})
