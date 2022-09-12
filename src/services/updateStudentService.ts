import { AxiosError, AxiosInstance } from 'axios';
import { API } from '../infra/api';
import { Alert } from '../shared/alert';

interface UpdateStudentInput {
  name: string;
  email: string;
}

enum TranslateField {
  RA = 'Registro Acadêmico',
  EMAIL = 'E-mail',
  DOCUMENT = 'CPF',
}

type Field = 'RA' | 'EMAIL' | 'DOCUMENT';

export class UpdateStudentService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = API;
  }

  public async handle(id: string, input: UpdateStudentInput) {
    try {
      await this.api.put(`/students/${id}`, input);
    } catch (e) {
      const error = e as AxiosError;
      const status = error.response?.status;
      const { field } = error.response?.data as { field: Field };

      if (status == 409) {
        Alert.toastError(`${TranslateField[field]} já existe cadastrado`);
        throw error;
      }

      Alert.toastError(`Não foi possível atualizar aluno :(`);
      throw error;
    }
  }
}
