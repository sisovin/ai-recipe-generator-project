import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { generateRecipe } from '../services/recipeService';

const GenerateRecipeScreen = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState(null);

  const handleGenerateRecipe = async () => {
    try {
      const generatedRecipe = await generateRecipe(ingredients);
      setRecipe(generatedRecipe);
    } catch (error) {
      console.error('Error generating recipe:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Generate Recipe" />
      <TextInput
        style={styles.input}
        placeholder="Enter ingredients"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <Button title="Generate Recipe" onPress={handleGenerateRecipe} />
      {recipe && (
        <View style={styles.recipeContainer}>
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
          <Text>{recipe.instructions}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  recipeContainer: {
    marginTop: 16,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default GenerateRecipeScreen;
