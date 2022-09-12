import { StudentRepository } from '../../infra/repositories/StudentRepository';

interface CreateStudentInput {
  name: string;
  email: string;
  ra: string;
  document: string;
}

export class CreateStudentService {
  private readonly studentRepository: StudentRepository =
    new StudentRepository();

  async handle(input: CreateStudentInput): Promise<void> {
    input.document = input.document.replace(/\D/g, '');

    await this.studentRepository.persist(input);
  }
}
