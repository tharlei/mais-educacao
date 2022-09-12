import { getRepository, Repository } from 'typeorm';
import { StudentModel } from '../models/StudentModel';
import { BaseRepository } from './Repository';

interface StudentData {
  id?: string;
  name: string;
  email: string;
  ra: string;
  document: string;
}

export class StudentRepository implements BaseRepository {
  model = (): Repository<StudentModel> => getRepository(StudentModel);

  persist = async (studentData: StudentData): Promise<StudentData> => {
    const studentModel = this.toModel(studentData);

    const student = await this.model().save(studentModel);

    return this.toData(student);
  };

  delete = async (id: string): Promise<void> => {
    const studentModel = await this.model().findOne(id);

    if (!studentModel) {
      return;
    }

    await this.model().remove(studentModel);
  };

  toData = (studentModel: StudentModel): StudentData => ({
    id: studentModel.id,
    name: studentModel.name,
    email: studentModel.email,
    document: studentModel.document,
    ra: studentModel.ra,
  });

  toModel = (studentData: StudentData): StudentModel =>
    this.model().create({
      id: studentData.id,
      name: studentData.name,
      email: studentData.email,
      document: studentData.document,
      ra: studentData.ra,
    });
}
