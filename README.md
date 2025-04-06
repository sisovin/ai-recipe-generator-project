# AI Recipe Generator

This project is an AI Recipe Generator built using React Native with Lynx.js for the frontend and Strapi CMS for the backend.

## Project Structure

```
root/
│
├── frontend/ (Lynx/React App)
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── RecipeCard.js
│   │   ├── CategoryCard.js
│   │   ├── RecipeList.js
│   │   └── Header.js
│   │
│   ├── context/
│   │   └── AuthContext.js
│   │
│   ├── navigation/
│   │   ├── TabNavigator.js
│   │   ├── AuthNavigator.js
│   │   └── AppNavigator.js
│   │
│   ├── screens/
│   │   ├── LandingScreen.js
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── HomeScreen.js
│   │   ├── GenerateRecipeScreen.js
│   │   ├── RecipeDetailScreen.js
│   │   ├── ExploreScreen.js
│   │   ├── CategoryListScreen.js
│   │   ├── CookbookScreen.js
│   │   ├── SavedRecipesScreen.js
│   │   ├── ProfileScreen.js
│   │   └── AddRecipeScreen.js
│   │
│   ├── services/
│   │   ├── api.js         (Axios base config)
│   │   ├── authService.js
│   │   └── recipeService.js
│   │
│   ├── utils/
│   │   ├── validators.js
│   │   └── constants.js
│   │
│   ├── App.js
│   ├── lynx.config.js (if needed for Lynx.js settings)
│   └── package.json
│
├── backend/ (Strapi CMS)
│   ├── api/
│   │   └── recipe/
│   │       ├── controllers/
│   │       ├── models/
│   │       ├── services/
│   │       └── routes/
│   │
│   ├── config/
│   │   ├── database.js
│   │   └── server.js
│   │
│   ├── extensions/ (Custom plugins, if needed)
│   │
│   ├── public/ (Uploaded images etc.)
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

## Bonus breakdown by feature:

| Feature                          | Related Folders/Files                                  |
|:----------------------------------|:------------------------------------------------------|
| Project Setup                     | frontend/, backend/, README.md                        |
| Strapi CMS Backend Setup          | backend/api/recipe/, backend/config/                  |
| Landing Screen                    | frontend/screens/LandingScreen.js                    |
| Authentication                    | frontend/screens/LoginScreen.js, RegisterScreen.js, context/AuthContext.js, services/authService.js |
| Tab Navigation                    | frontend/navigation/TabNavigator.js                  |
| Home Screen                       | frontend/screens/HomeScreen.js                       |
| Generate Recipe using AI          | frontend/screens/GenerateRecipeScreen.js, services/recipeService.js |
| Save Recipe to Strapi CMS         | services/recipeService.js                            |
| Recipe By Category List           | screens/CategoryListScreen.js, components/CategoryCard.js |
| Recipe Detail Screen              | screens/RecipeDetailScreen.js, components/RecipeCard.js |
| Explore Screen                    | screens/ExploreScreen.js                             |
| Display Latest Recipe             | HomeScreen.js (latest recipe section)                 |
| CookBook (User Recipes & Favs)    | screens/CookbookScreen.js                            |
| Saved Recipe List                 | screens/SavedRecipesScreen.js                        |
| Profile Screen                    | screens/ProfileScreen.js                             |
| Deploy Strapi CMS                 | backend/.env, backend/config/                         |
