import api from './api';

export const fetchHotels = async () => {
  const response = await api.get('/hotels');
  return response.data;
};
