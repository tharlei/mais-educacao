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
    const isUsed = await this.studentRepository.model().findOne({
      where: {
        email,
        ...(id && { id }),
      },
    });

    if (isUsed) {
      throw new Error('EMAIL');
    }
  }

  private async raIsUsed({ ra, id }: StudentInput) {
    if (!ra) {
      return;
    }

    const isUsed = await this.studentRepository.model().findOne({
      where: {
        ra,
        ...(id && { id }),
      },
    });

    if (isUsed) {
      throw new Error('RA');
    }
  }

  private async documentIsUsed({ document, id }: StudentInput) {
    if (!document) {
      return;
    }

    const isUsed = await this.studentRepository.model().findOne({
      where: {
        document: document.replace(/\D/g, ''),
        ...(id && { id }),
      },
    });

    if (isUsed) {
      throw new Error('DOCUMENT');
    }
  }
}
