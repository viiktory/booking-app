import api from './api';

export const getReviews = async () => {
  const response = await api.get('/data', { params: { type: 'reviews' } });
  return response.data;
};
