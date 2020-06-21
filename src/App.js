import React, { useState } from "react";
import Header from "./components/header/Header";
import RecipeCardWrapper from "./components/recipeCards/RecipeCardWrapper";

function App() {
  const [recipe, setRecipe] = useState(null);
  let onRecipeSelect = (recipe) => {
    setRecipe(recipe);
  };
  return (
    <div>
      <Header onRecipeSelect={onRecipeSelect}></Header>
      <RecipeCardWrapper selectedRecipe={recipe} />
    </div>
  );
}

export default App;
