import { StudentRepository } from '../../infra/repositories/StudentRepository';

export class DeleteStudentService {
  private readonly studentRepository: StudentRepository =
    new StudentRepository();

  async handle(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
