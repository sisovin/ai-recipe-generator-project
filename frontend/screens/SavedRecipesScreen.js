import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import recipeService from '../services/recipeService';
import RecipeCard from '../components/RecipeCard';

const SavedRecipesScreen = () => {
  const { user } = useContext(AuthContext);
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      if (user) {
        const recipes = await recipeService.getSavedRecipes(user.id);
        setSavedRecipes(recipes);
      }
    };

    fetchSavedRecipes();
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Recipes</Text>
      <FlatList
        data={savedRecipes}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SavedRecipesScreen;
