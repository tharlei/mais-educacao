import { AxiosInstance } from 'axios';
import { API } from '../infra/api';
import { Alert } from '../shared/alert';

export class DeleteStudentService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = API;
  }

  public async handle(id: string) {
    try {
      await this.api.delete(`/students/${id}`);
    } catch (e) {
      Alert.toastError(`Não foi possível excluir aluno :(`);
    }
  }
}
