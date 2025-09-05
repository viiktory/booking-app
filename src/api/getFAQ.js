import api from './api';

export const getFAQ = async () => {
  const response = await api.get('/faqData');
  return response.data;
};
