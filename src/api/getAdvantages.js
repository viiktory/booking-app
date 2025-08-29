import api from './api';

export const getAdvantages = async () => {
  const response = await api.get('/advantages');
  return response.data;
};
