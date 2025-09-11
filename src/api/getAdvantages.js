import api from './api';

export const getAdvantages = async () => {
  const response = await api.get('/data', { params: { type: 'advantages' } });
  return response.data;
};
