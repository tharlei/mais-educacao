import { Request, Response } from 'express';
import { FindStudentQuery } from '../../modules/queries/FindStudentQuery';
import { ListStudentQuery } from '../../modules/queries/ListStudentQuery';
import { CreateStudentService } from '../../modules/services/CreateStudentService';
import { DeleteStudentService } from '../../modules/services/DeleteStudentService';
import { ExistsDataOfStudentService } from '../../modules/services/ExistsDataOfStudentService';
import { UpdateStudentService } from '../../modules/services/UpdateStudentService';

export class StudentController {
  private readonly listStudentQuery: ListStudentQuery = new ListStudentQuery();
  private readonly findStudentQuery: FindStudentQuery = new FindStudentQuery();
  private readonly existsDataOfStudentService: ExistsDataOfStudentService =
    new ExistsDataOfStudentService();

  private readonly createStudentService: CreateStudentService =
    new CreateStudentService();

  private readonly updateStudentService: UpdateStudentService =
    new UpdateStudentService();

  private readonly deleteStudentService: DeleteStudentService =
    new DeleteStudentService();

  index = async (_request: Request, response: Response): Promise<Response> => {
    try {
      const data = await this.listStudentQuery.handle();
      return response.status(200).json(data);
    } catch (error) {
      console.error(error);
      return response.status(400).json();
    }
  };

  show = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;

    try {
      const student = await this.findStudentQuery.handle(id);

      if (!student) {
        return response.status(404).json();
      }

      return response.status(200).json(student);
    } catch (error) {
      console.error(error);
      return response.status(400).json();
    }
  };

  store = async (request: Request, response: Response): Promise<Response> => {
    const { name, email, ra, document } = request.body;

    try {
      await this.existsDataOfStudentService.handle({ email, ra, document });
    } catch ({ message }) {
      const field = message;
      return response.status(409).json({
        message: `Exists student with this ${field}`,
        field,
      });
    }

    try {
      await this.createStudentService.handle({
        name,
        email,
        ra,
        document,
      });
      return response.status(201).json();
    } catch (error) {
      console.error(error);
      return response.status(400).json();
    }
  };

  update = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;
    const { name, email } = request.body;

    try {
      await this.existsDataOfStudentService.handle({ email });
    } catch ({ message }) {
      const field = message;
      return response.status(409).json({
        message: `Exists student with this ${field}`,
        field,
      });
    }

    try {
      await this.updateStudentService.handle({
        id,
        name,
        email,
      });
      return response.status(204).json();
    } catch (error) {
      console.error(error);
      return response.status(400).json();
    }
  };

  destroy = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;

    try {
      await this.deleteStudentService.handle(id);
      return response.status(204).json();
    } catch (error) {
      console.error(error);
      return response.status(400).json();
    }
  };
}
