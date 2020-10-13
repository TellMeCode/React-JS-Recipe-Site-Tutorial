import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeCards.css";
import {useLocation} from 'react-router-dom';

const API_KEY = "674f13ea67e24742857e3354241e177c";

let RecipeCardWrapper = (props) => {
  let urlState = useLocation().state;
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    if (props.selectedRecipe) fetchRecipe();
  }, [props.selectedRecipe]);

  let fetchRecipe = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedRecipe}&addRecipeInformation=true&number=1`
    );
    let recipeData = await response.json();
    setRecipes(recipeData.results);
  };

  return (
    <div className="recipeWrapper"
    style={{
      width : urlState && urlState.hasDetails ? '60%': '100%'
    }}
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeCardWrapper;
