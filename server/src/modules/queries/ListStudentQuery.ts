import { StudentRepository } from '../../infra/repositories/StudentRepository';
import { Document } from '../shared/document';

interface ListStudentData {
  id: string;
  name: string;
  email: string;
  ra: string;
  document: string;
}

export class ListStudentQuery {
  private readonly studentRepository: StudentRepository =
    new StudentRepository();

  async handle(): Promise<ListStudentData[]> {
    const students = await this.studentRepository.model().find();

    return students.map((studentModel) => ({
      id: studentModel.id,
      name: studentModel.name,
      email: studentModel.email,
      ra: studentModel.ra,
      document: Document.format(studentModel.document),
    }));
  }
}
