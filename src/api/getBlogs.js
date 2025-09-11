import api from './api';

export const getBlogs = async () => {
  const response = await api.get('/data', { params: { type: '/posts' } });
  return response.data;
};

export const getBlogById = async (id) => {
  const blogs = getBlogs();
  return blogs.find((blog) => blog.id === id);
};
