import api from './api';

export const getHotels = async () => {
  const response = await api.get('/data', { params: { type: 'hotels' } });
  return response.data;
};

export const getHotelById = async (id) => {
  const hotels = getHotels();
  return hotels.find((hotel) => hotel.id === id);
};
