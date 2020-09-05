import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeCards.css";

const API_KEY = "fc754827722b42b49893f499c1a4839d";

let RecipeCardWrapper = (props) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    if (props.selectedRecipe) fetchRecipe();
  }, [props.selectedRecipe]);

  let fetchRecipe = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedRecipe}&addRecipeInformation=true&number=6`
    );
    let recipeData = await response.json();
    setRecipes(recipeData.results);
  };

  return (
    <div className="recipeWrapper">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeCardWrapper;
