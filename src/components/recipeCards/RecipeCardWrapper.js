import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeCards.css";

let RecipeCardWrapper = (props) => {
  console.log(props);
  return (
    <div className="recipeWrapper">
      <RecipeCard />
    </div>
  );
};

export default RecipeCardWrapper;
