import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { getLatestRecipes } from '../services/recipeService';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchLatestRecipes();
  }, []);

  const fetchLatestRecipes = async () => {
    try {
      const latestRecipes = await getLatestRecipes();
      setRecipes(latestRecipes);
    } catch (error) {
      console.error('Error fetching latest recipes:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default HomeScreen;
