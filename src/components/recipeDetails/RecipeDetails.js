import React,{useEffect} from 'react';
import './RecipeDetails.css';
import {Link,useParams } from 'react-router-dom';
import d from './RecipeSample.json'
const API_KEY = "674f13ea67e24742857e3354241e177c";
function RecipeDetails(props){
    let {recipeId} = useParams();
   useEffect(()=>{
    //fetchRecipeInformation();
    console.log(d)
   },[recipeId])

    let fetchRecipeInformation = async () => {
        let response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
        );
        let recipeInfoData = await response.json();
        console.log(recipeInfoData)
      };
    
    return(
        <div className="recipeDetails">
            <Link to="/"><div className="recipeDetailsClose">X</div></Link>
            {/* Header */}
            <div style={{
                width: '100%',
                objectFit: 'cover',
                height: '200px',
                position:'relative',
                backgroundImage: `url(${d.image})`,
            }}>
                <span>{d.title}</span>
            </div>
        </div>
    )
}

export default RecipeDetails;