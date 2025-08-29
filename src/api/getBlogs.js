import api from './api';

export const getBlogs = async () => {
  const response = await api.get('/posts');
  return response.data;
};


export const getBlogById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};
