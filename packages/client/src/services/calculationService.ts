import { api } from './api';

export const calculationService = async (formData: any) => {
  try {
    const response = await api.post('/api/calculations', formData);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
