import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Cards/Project/Main'
import Projects from '@/components/Projects/Main'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Project/:id/detail', name: 'Project', component: Project, props: true },
    { path: '/Projects', name: 'Projects', component: Projects }
  ]
})
