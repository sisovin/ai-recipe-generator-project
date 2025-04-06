import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <View style={styles.container}>
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
    padding: 10,
  },
});

export default RecipeList;
