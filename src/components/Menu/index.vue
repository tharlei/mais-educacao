<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useDrawer } from '../../infra/useDrawer';

const router = useRouter();
const { drawer } = useDrawer();

const menu = [
  {
    url: '/',
    icon: 'fas fa-home',
    title: 'Início',
  },
  {
    url: '/alunos',
    icon: 'fas fa-users',
    title: 'Alunos',
  },
];

function handleRedirect(route: string) {
  router.push(route);
}
</script>

<template>
  <v-navigation-drawer v-model="drawer" app>
    <div class="d-flex justify-center mt-8">
      <router-link to="/">
        <img src="../../assets/logo.svg" alt="icon" />
      </router-link>
    </div>

    <v-list class="mt-10">
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        class="mb-2"
        @click="handleRedirect(item.url)"
      >
        <div class="d-flex align-center">
          <v-icon
            :icon="item.icon"
            size="16"
            color="grey"
            class="d-flex mr-10"
          />

          <span>
            {{ item.title }}
          </span>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
