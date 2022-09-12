import { Not } from 'typeorm';
import { StudentModel } from '../../infra/models/StudentModel';
import { StudentRepository } from '../../infra/repositories/StudentRepository';

export interface StudentInput {
  email: string;
  id?: string;
  ra?: string;
  document?: string;
}

export class ExistsDataOfStudentService {
  private readonly studentRepository: StudentRepository =
    new StudentRepository();

  async handle(input: StudentInput): Promise<void> {
    await this.emailIsUsed(input);
    await this.documentIsUsed(input);
    await this.raIsUsed(input);
  }

  private async emailIsUsed({ email, id }: StudentInput) {
    const isUsed = await this.find({ email }, id);

    if (isUsed) {
      throw new Error('EMAIL');
    }
  }

  private async raIsUsed({ ra, id }: StudentInput) {
    if (!ra) {
      return;
    }

    const isUsed = await this.find({ ra }, id);

    if (isUsed) {
      throw new Error('RA');
    }
  }

  private async documentIsUsed({ document, id }: StudentInput) {
    if (!document) {
      return;
    }

    const isUsed = await this.find({ document }, id);

    if (isUsed) {
      throw new Error('DOCUMENT');
    }
  }

  private async find(
    input: { [x: string]: string },
    id?: string,
  ): Promise<StudentModel | undefined> {
    return await this.studentRepository.model().findOne({
      where: {
        ...input,
        ...(id && {
          id: Not(id),
        }),
      },
    });
  }
}
