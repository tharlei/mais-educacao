import { createRouter, createWebHistory } from 'vue-router';

function component(page: string) {
  const path = `./pages/${page}/index.vue`;
  return () => import(/* @vite-ignore */ path);
}

const routes = [
  {
    path: '/',
    component: component('Home'),
  },
  {
    path: '/alunos',
    component: component('Student/List'),
  },
  {
    path: '/alunos/novo',
    component: component('Student/New'),
  },
  {
    path: '/alunos/:id/editar',
    props: true,
    component: component('Student/Edit'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
