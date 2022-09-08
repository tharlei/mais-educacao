<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const menu = [
  {
    url: '/',
    icon: 'fas fa-home',
    title: 'Home',
  },
  {
    url: '/',
    icon: 'fas fa-users',
    title: 'Alunos',
  },
];
const drawer = ref(true);

function handleRedirect(route: string) {
  router.push(route);
}
</script>

<template>
  <div>
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

    <v-app-bar color="info">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="fas fa-ellipsis-vertical"></v-btn>
    </v-app-bar>
  </div>
</template>

<style type="sass" scoped></style>
