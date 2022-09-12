<script setup lang="ts">
import Menu from '../../components/Menu/index.vue';
import Toobar from '../../components/Toobar/index.vue';
</script>

<template>
  <v-card>
    <v-layout>
      <Menu />
      <Toobar />
      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
main {
  background: #fafafa;
  min-height: 100vh;
}
</style>
