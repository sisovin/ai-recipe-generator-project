import api from './api';

export const generateRecipe = async (ingredients) => {
  try {
    const response = await api.post('/recipes/generate', { ingredients });
    return response.data;
  } catch (error) {
    throw new Error('Error generating recipe');
  }
};

export const addRecipe = async (recipe) => {
  try {
    const response = await api.post('/recipes', recipe);
    return response.data;
  } catch (error) {
    throw new Error('Error adding recipe');
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching recipe details');
  }
};
