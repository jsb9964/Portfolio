import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
  // Chaque navigation commence en haut de la nouvelle page.
  return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Projets',
      name: 'projets',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      // Le slug sert à retrouver le projet à afficher dans la vue détail.
      path: '/Projets/:slug',
      name: 'detail-projet',
      component: () => import('../views/ProjectDetailsView.vue'),
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/Veille',
      name: 'veille',
      component: () => import('../views/VeilleView.vue'),
    },
    {
      path: '/Mentions-legales',
      name: 'mentions-legales',
      component: () => import('../views/MentionslegalesView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
