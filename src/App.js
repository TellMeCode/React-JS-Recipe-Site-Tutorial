import React, { useState } from "react";
import Header from "./components/header/Header";
import RecipeCardWrapper from "./components/recipeCards/RecipeCardWrapper";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import RecipeDetails from './components/recipeDetails/RecipeDetails';
function App() {
  const [recipe, setRecipe] = useState(null);
  let onRecipeSelect = (recipe) => {
    setRecipe(recipe);
  };
  return (
    <Router>
    <div>
      <Header onRecipeSelect={onRecipeSelect}></Header>
      <RecipeCardWrapper selectedRecipe={recipe} />
      <Switch>
        <Route path="/recipe/:recipeId">
          <RecipeDetails />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
