import { CreateStudentService } from './createStudentService';
import { API } from '../infra/api';
import { describe, expect, it, vi } from 'vitest';
import { Alert } from '../shared/alert';

const createStudentInputMock = {
  name: 'Tharlei Aleixo',
  email: 'tharlei_aleixo@hotmail.com',
  document: '771.664.030-55',
  ra: 'C8808A-6',
};

describe('CreateStudentService test', () => {
  it('should not return error when API resolved', () => {
    vi.spyOn(API, 'post').mockResolvedValue(null);

    expect(async () => {
      await new CreateStudentService().handle(createStudentInputMock);
    }).not.toThrowError();

    expect(API.post).toBeCalledTimes(1);
  });

  it('should called Alert one time when API rejects', async () => {
    const error = {
      response: {
        status: 400,
      },
    };

    vi.spyOn(API, 'post').mockRejectedValue(error);
    vi.spyOn(Alert, 'toastError').mockResolvedValue();

    try {
      await new CreateStudentService().handle(createStudentInputMock);
    } catch (e) {}

    expect(Alert.toastError).toBeCalledTimes(1);
  });

  it('should called Alert one time when API return http code conflict', async () => {
    const error = {
      response: {
        status: 409,
        data: {
          field: 'EMAIL',
        },
      },
    };

    vi.spyOn(API, 'post').mockRejectedValue(error);
    vi.spyOn(Alert, 'toastError').mockResolvedValue();

    try {
      await new CreateStudentService().handle(createStudentInputMock);
    } catch (e) {}

    expect(Alert.toastError).toBeCalledTimes(1);
  });
});
