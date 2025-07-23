import api from './api';

export const fetchAdvantages = async () => {
  const response = await api.get('/advantages');
  return response.data;
};
