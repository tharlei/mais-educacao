import { AxiosError, AxiosInstance } from 'axios';
import { API } from '../infra/api';
import { Alert } from '../shared/alert';

export interface StudentData {
  id: string;
  name: string;
  document: string;
  email: string;
  ra: string;
}

export class GetStudentService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = API;
  }

  public async handle(id: string): Promise<StudentData | null> {
    try {
      const { data } = await this.api.get<StudentData>(`/students/${id}`);

      return data;
    } catch (e) {
      const error = e as AxiosError;
      const status = error.response?.status;

      if (status == 404) {
        Alert.toastError(`Aluno inexistente`);
        throw error;
      }

      Alert.toastError('Não foi possível carregar aluno :(');
      return null;
    }
  }
}
