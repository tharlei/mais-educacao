<script setup lang="ts">
import Menu from './components/Menu/index.vue';
</script>

<template>
  <v-card>
    <v-layout>
      <Menu />
      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style>
main {
  background: #fafafa;
  min-height: 100vh;
}
a {
  text-decoration: none;
}
</style>
