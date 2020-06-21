import React from "react";
import { Time, Group } from "../../assets";

let RecipeCard = () => {
  return (
    <div className="recipeCard">
      <img className="recipeImage"></img>
      <span className="recipeName">Title</span>
      <div className="recipeInfo">
        <Time />
        <span>10 mins</span>
        <Group />
        <span>4</span>
      </div>
    </div>
  );
};

export default RecipeCard;
