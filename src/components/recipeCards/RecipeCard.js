import React from "react";
import { Time, Group } from "../../assets";

let RecipeCard = (props) => {
  let { recipe } = props;
  return (
    <div className="recipeCard">
      <img src={recipe.image} alt={recipe.title} className="recipeImage"></img>
      <span className="recipeName">{recipe.title}</span>
      <div className="recipeInfo">
        <Time />
        <span>{recipe.readyInMinutes} mins</span>
        <Group />
        <span>{recipe.servings}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
