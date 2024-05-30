import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ChatView from '../views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
      meta: { layout: 'blank' }
    },
    {
      path: '/registration',
      name: 'Registration',
      component: RegistrationView,
      meta: { layout: 'blank' }
    },
    {
      path: '/chat',
      name: 'Chat',
      component: ChatView,
      meta: { layout: 'blank' }
    },
  ]
})

export default router
