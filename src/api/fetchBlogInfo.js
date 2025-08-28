import api from './api';

export const fetchBlogInfo = async () => {
  const response = await api.get('/posts');
  return response.data;
};
