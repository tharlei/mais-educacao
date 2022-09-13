<script setup lang="ts">
import { useDrawer } from '../../infra/useDrawer';

const drawer = useDrawer();
</script>

<template>
  <v-app-bar color="info">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer.toggle"
    ></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="fas fa-ellipsis-vertical"></v-btn>
  </v-app-bar>
</template>

<style scoped></style>
