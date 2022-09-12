import { AxiosInstance } from 'axios';
import { API } from '../infra/api';
import { Alert } from '../shared/alert';

export interface StudentData {
  id: string;
  name: string;
  document: string;
  ra: string;
}

export class ListStudentService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = API;
  }

  public async handle(): Promise<StudentData[]> {
    try {
      const { data } = await this.api.get<StudentData[]>('/students');

      return data;
    } catch (error) {
      Alert.toastError('Não foi possível carregar alunos :(');
      return [];
    }
  }
}
