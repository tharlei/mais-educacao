import { Router } from 'express';

import { StudentController } from '../controllers/StudentController';

import { StoreStudentRequest } from '../controllers/requests/StoreStudentRequest';
import { UpdateStudentRequest } from '../controllers/requests/UpdateStudentRequest';
import { TokenMiddleware } from '../middlewares/TokenMiddleware';

const studentController = new StudentController();

const routes = Router();

routes.use('/', TokenMiddleware);
routes.get('/students', studentController.index);
routes.get('/students/:id', studentController.show);
routes.post('/students', StoreStudentRequest, studentController.store);
routes.put('/students/:id', UpdateStudentRequest, studentController.update);
routes.delete('/students/:id', studentController.destroy);

export { routes };
