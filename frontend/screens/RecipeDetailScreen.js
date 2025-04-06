import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { getRecipeById } from '../services/recipeService';

const RecipeDetailScreen = ({ route }) => {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  const fetchRecipeDetails = async () => {
    try {
      const recipeDetails = await getRecipeById(recipeId);
      setRecipe(recipeDetails);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  if (!recipe) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>
        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            {ingredient}
          </Text>
        ))}
        <Text style={styles.instructionsTitle}>Instructions:</Text>
        {recipe.instructions.map((instruction, index) => (
          <Text key={index} style={styles.instruction}>
            {instruction}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ingredient: {
    fontSize: 16,
    color: '#333',
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  instruction: {
    fontSize: 16,
    color: '#333',
  },
});

export default RecipeDetailScreen;
