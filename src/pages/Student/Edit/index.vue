<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Alert } from '../../../shared/alert';
import { rules } from '../../../shared/rules';
import { GetStudentService } from '../../../services/getStudentService';
import { UpdateStudentService } from '../../../services/updateStudentService';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: { type: String, required: true },
});

const router = useRouter();

const valid = ref(false);
const name = ref('');
const email = ref('');
const ra = ref('');
const document = ref('');
const loading = ref(true);

onMounted(async () => {
  await getStudent();
});

async function getStudent(): Promise<void> {
  try {
    const data = await new GetStudentService().handle(props.id);

    if (!data) {
      return;
    }

    name.value = data.name;
    email.value = data.email;
    ra.value = data.ra;
    document.value = data.document;
    loading.value = false;
  } catch (error) {
    router.replace('/alunos');
  }
}

async function handleSubmit(): Promise<void> {
  if (!valid.value) {
    return Alert.toastError('Verificar campos...');
  }

  loading.value = true;

  try {
    await new UpdateStudentService().handle(props.id, {
      name: name.value,
      email: email.value,
    });

    Alert.toastSuccess(`Atualizado com sucesso`);
  } catch (e) {
  } finally {
    loading.value = false;
  }
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
          <v-text-field v-model="ra" label="RA" disabled></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field v-model="document" label="CPF" disabled></v-text-field>
        </v-col>
      </v-row>

      <div class="mt-8">
        <router-link to="/alunos">
          <v-btn color="grey" class="text-white mr-2"> Cancelar </v-btn>
        </router-link>
        <v-btn
          color="warning"
          class="text-white"
          type="submit"
          :loading="loading"
        >
          Salvar
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<style scoped></style>
