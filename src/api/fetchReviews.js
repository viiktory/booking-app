import api from './api';

export const fetchReviews = async () => {
  const response = await api.get('/reviews');
  return response.data;
};
