import { AxiosError, AxiosInstance } from 'axios';
import { API } from '../infra/api';
import { Alert } from '../shared/alert';

interface CreateStudentInput {
  name: string;
  email: string;
  ra: string;
  document: string;
}

enum TranslateField {
  ra = 'Registro Acadêmico',
  email = 'E-mail',
  document = 'CPF',
}

type Field = 'ra' | 'email' | 'document';

export class CreateStudentService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = API;
  }

  public async handle(input: CreateStudentInput) {
    try {
      await this.api.post('/students', input);
    } catch (e) {
      const error = e as AxiosError;
      if (error.response?.status == 409) {
        const { field } = error.response?.data as { field: Field };
        Alert.toastError(`${TranslateField[field]} já existe cadastrado`);
        return;
      }

      Alert.toastError(`Não foi possível cadastrar aluno :(`);
    }
  }
}
