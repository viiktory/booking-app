import api from './api';

export async function hotelsLoader() {
  const response = await api.get('/hotels');
  return response.data;
}
