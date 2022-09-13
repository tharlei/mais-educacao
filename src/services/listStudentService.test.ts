import { ListStudentService } from './listStudentService';
import { API } from '../infra/api';
import { describe, expect, it, vi } from 'vitest';
import { Alert } from '../shared/alert';

const mockListStudentData = {
  data: [
    {
      id: '3368776c-89b2-436f-9471-18bdc21b2eb8',
      name: 'Tharlei Aleixo',
      email: 'tharlei_aleixo@hotmail.com',
      document: '771.664.030-55',
      ra: 'C8808A-6',
    },
  ],
};

describe('ListStudentService test', () => {
  it('should called API one time', () => {
    vi.spyOn(API, 'get').mockResolvedValue(mockListStudentData);
    new ListStudentService().handle();
    expect(API.get).toBeCalledTimes(1);
  });

  it('should return data name equal response name', async () => {
    vi.spyOn(API, 'get').mockResolvedValue(mockListStudentData);
    const data = await new ListStudentService().handle();

    expect(data[0].name).toEqual(mockListStudentData.data[0].name);
  });

  it('should called Alert one time when API rejects', async () => {
    vi.spyOn(API, 'get').mockRejectedValue(null);
    vi.spyOn(Alert, 'toastError').mockResolvedValue();

    try {
      await new ListStudentService().handle();
    } catch (e) {}

    expect(Alert.toastError).toBeCalledTimes(1);
  });
});
