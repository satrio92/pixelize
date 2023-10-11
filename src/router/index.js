import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import PostDetail from '../views/PostDetail.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: '/post/:post',
        name: 'PostDetail',
        component: PostDetail
      }
    ]
  })
  
  export default router