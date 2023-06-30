import axios from 'axios';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

const users = {
  getAll: async ({ page, count }) => {
    const { data } = await axios.get('/users', {
      params: {
        page,
        count,
      },
    });
    return data;
  },
  create: async ({ formData, token }) => {
    const { data } = await axios.post('/users', formData, {
      headers: {
        Token: token,
      },
    });
    return data;
  },
  getById: async id => {
    const { data } = await axios.get(`/users/${id}`);
    return data;
  },
};

const positions = {
  getAll: async () => {
    const { data } = await axios.get('/positions');
    return data;
  },
};

const token = {
  get: async () => {
    const { data } = await axios.get('/token');
    return data;
  },
};

export const API = {
  users,
  positions,
  token,
};
