import { body, check } from 'express-validator';
import { ValidationMiddleware } from '../../middlewares/ValidationMiddleware';

const validations = [
  body('name').isString(),
  body('email').isString(),
  check('name', 'First Name and last name is required').custom(
    (value: string) => value.split(' ').length > 1,
  ),
];

const UpdateStudentRequest = ValidationMiddleware(validations);

export { UpdateStudentRequest };
