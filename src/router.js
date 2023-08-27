// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: () => import('./pages/Homepage.vue')
    },
    {
        path: '/history',
        name: 'History',
        component: () => import('./pages/History.vue')
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;