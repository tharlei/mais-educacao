import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./pages/Home/index.vue'),
  },
  {
    path: '/alunos',
    component: () => import('./pages/Student/List/index.vue'),
  },
  {
    path: '/alunos/novo',
    component: () => import('./pages/Student/New/index.vue'),
  },
  {
    path: '/alunos/:id/editar',
    props: true,
    component: () => import('./pages/Student/Edit/index.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
