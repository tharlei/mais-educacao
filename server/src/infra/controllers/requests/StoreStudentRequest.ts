import { body, check } from 'express-validator';
import { Document } from '../../../modules/shared/document';
import { ValidationMiddleware } from '../../middlewares/ValidationMiddleware';

const validations = [
  body('name').isString().trim(),
  body('email').isString().trim(),
  body('ra').isString().trim(),
  body('document').isString().trim(),
  check('name', 'First Name and last name is required').custom(
    (value: string) => value.split(' ').length > 1,
  ),
  check('document', 'Document is invalid').custom((value: string) =>
    Document.validCpf(value),
  ),
];

const StoreStudentRequest = ValidationMiddleware(validations);

export { StoreStudentRequest };
