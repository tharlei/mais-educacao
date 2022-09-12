import { StudentRepository } from '../../infra/repositories/StudentRepository';
import { FindStudentQuery } from '../queries/FindStudentQuery';

interface UpdateStudentInput {
  id: string;
  name: string;
  email: string;
}

export class UpdateStudentService {
  private readonly studentRepository: StudentRepository =
    new StudentRepository();

  private readonly findStudentQuery: FindStudentQuery = new FindStudentQuery();

  async handle(input: UpdateStudentInput): Promise<void> {
    const student = await this.findStudentQuery.handle(input.id);

    if (!student) {
      throw new Error('Student not found');
    }

    student.name = input.name;
    student.email = input.email;

    await this.studentRepository.persist(student);
  }
}
