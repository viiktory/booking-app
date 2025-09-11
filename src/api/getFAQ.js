import api from './api';

export const getFAQ = async () => {
  const response = await api.get('/data', { params: { type: '/faqData' } });
  return response.data;
};
