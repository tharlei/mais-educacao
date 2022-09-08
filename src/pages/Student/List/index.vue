<script setup lang="ts">
import { ref } from 'vue';
import EasyDataTable from 'vue3-easy-data-table';
import type { Header, Item } from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { Alert } from '../../../shared/alert';

const searchValue = ref('');
const loading = ref(false);

const headers: Header[] = [
  { text: 'Registro Acadêmico', value: 'ra', sortable: true },
  { text: 'Nome', value: 'name', sortable: true },
  { text: 'CPF', value: 'document', sortable: true },
  { text: 'Ações', value: 'actions', sortable: true },
];
const students: Item[] = [
  {
    id: '1',
    document: '465.133.828-31',
    name: 'Tharlei João Teixeira',
    ra: 'C8808A-6',
  },
  {
    id: '2',
    document: '095.470.508-42',
    name: 'Sirlei Teixeira Aleixo',
    ra: 'B2763-S',
  },
];

async function handleDelete() {
  const alertResult = await Alert.confirmMessage('Deseja realmente excluir?');

  if (!alertResult.isConfirmed) {
    return;
  }

  console.log('delete');
}
</script>

<template>
  <v-row>
    <v-col cols="6" class="d-flex">
      <v-text-field
        v-model="searchValue"
        label="Pesquisar por:"
        prepend-icon="fas fa-search"
        placeholder="Digite item que deseja buscar..."
        :dense="true"
      ></v-text-field>
      <v-btn color="grey" class="text-white">Buscar</v-btn>
    </v-col>

    <v-col cols="6" class="d-flex justify-center align-start">
      <router-link to="/alunos/novo">
        <v-btn color="primary" class="text-white">Cadastrar aluno</v-btn>
      </router-link>
    </v-col>
  </v-row>

  <EasyDataTable
    :headers="headers"
    :items="students"
    :loading="loading"
    table-class-name="customize-table"
  >
    <template #item-actions="item">
      <div class="d-flex align-center justify-around">
        <router-link :to="`/alunos/${item.id}/editar`">
          <v-btn color="grey" class="btn mr-2">
            <v-icon icon="fas fa-edit" color="white" />
          </v-btn>
        </router-link>

        <v-btn color="red" class="btn" @click="handleDelete">
          <v-icon icon="fas fa-trash" color="white" />
        </v-btn>
      </div>
    </template>
  </EasyDataTable>
</template>

<style scoped>
.customize-table {
  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-item-padding: 10px 15px;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;
  --easy-table-footer-height: 50px;
  --34665021: 0px !important;
}
.btn {
  padding: 0rem 0.6rem 0.1rem 0.6rem;
  border-radius: 50px;
  min-width: auto;
}
</style>
