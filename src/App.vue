<script setup lang="ts">
import Menu from './components/Menu/index.vue';
</script>

<template>
  <v-card>
    <v-layout>
      <Menu />
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
