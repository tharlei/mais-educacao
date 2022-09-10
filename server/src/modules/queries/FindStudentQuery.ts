import { StudentRepository } from '../../infra/repositories/StudentRepository';
import { Document } from '../shared/document';

interface FindStudentData {
  id: string;
  name: string;
  email: string;
  ra: string;
  document: string;
}

export class FindStudentQuery {
  private readonly studentRepository: StudentRepository =
    new StudentRepository();

  async handle(id: string): Promise<FindStudentData | null> {
    try {
      const student = await this.studentRepository.model().findOne(id);

      if (!student) {
        return null;
      }

      return {
        id: student.id,
        name: student.name,
        email: student.email,
        ra: student.ra,
        document: Document.format(student.document),
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
