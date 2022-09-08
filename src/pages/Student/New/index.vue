<script setup lang="ts">
import { ref } from 'vue';
import { Alert } from '../../../shared/alert';
import { rules } from '../../../shared/rules';

const valid = ref(false);
const name = ref('');
const email = ref('');
const ra = ref('');
const document = ref('');

function handleSubmit() {
  if (!valid.value) {
    return Alert.toastError('Verificar campos...');
  }

  console.log('send');
}
</script>

<template>
  <v-card class="pa-4">
    <v-form v-model="valid" @submit.prevent="handleSubmit">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="rules.name"
            label="Nome"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="8">
          <v-text-field
            v-model="email"
            :rules="rules.email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="ra"
            :rules="rules.ra"
            label="RA"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="document"
            :rules="rules.document"
            label="CPF"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <div class="mt-8">
        <router-link to="/alunos">
          <v-btn color="grey" class="text-white mr-2"> Voltar </v-btn>
        </router-link>
        <v-btn color="success" class="text-white" type="submit">
          Cadastrar
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<style scoped></style>
