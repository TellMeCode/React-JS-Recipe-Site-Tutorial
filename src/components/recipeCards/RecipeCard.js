import React from "react";
import { Time, Group } from "../../assets";
import {Link} from 'react-router-dom';
let RecipeCard = (props) => {
  let { recipe } = props;
  return (
    <div className="recipeCard">
      <Link to={{
        pathname : `/recipe/${recipe.id}`,
        state:{
          hasDetails : true
        }
      }}>
      <img src={recipe.image} alt={recipe.title} className="recipeImage"></img>
      <span className="recipeName">{recipe.title}</span>
      <div className="recipeInfo">
        <Time />
        <span>{recipe.readyInMinutes} mins</span>
        <Group />
        <span>{recipe.servings}</span>
      </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
