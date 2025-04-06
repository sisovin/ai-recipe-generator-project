import api from './api';

const authService = {
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/local', {
        identifier: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  },

  register: async (email, password) => {
    try {
      const response = await api.post('/auth/local/register', {
        username: email,
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  },

  logout: async () => {
    // Implement logout functionality if needed
  },
};

export default authService;
