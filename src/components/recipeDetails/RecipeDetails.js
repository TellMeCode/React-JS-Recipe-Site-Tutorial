import React,{useEffect,useState} from 'react';
import './RecipeDetails.css';
import {Link,useParams } from 'react-router-dom';
import SampleData from './SampleDetails.json'
import Ingredients from './Ingredients';
const API_KEY = "";
function RecipeDetails(props){
    let {recipeId} = useParams();
    const [details,setDetails] = useState({})
   useEffect(()=>{
    fetchRecipeInformation();
   },[recipeId])

    let fetchRecipeInformation = async () => {
         let response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
        );
        let recipeInfoData = await response.json(); 
        //console.log(recipeInfoData)
        setDetails(recipeInfoData)
      };
    
    return(
        <div className="recipeDetails">
            <Link to="/"><div className="recipeDetailsClose">X</div></Link>
            {/* Header */}
            <div
            style={{
                backgroundImage:`url(${details.image})`,
                height : '200px',
                objectFit : 'cover',
                position:'relative'
            }}
            >
                <span className="recipeTitle">{details.title}</span>
            </div>
            <div
            style={{
                height : 'calc(100% - 200px)',
                overflow : 'auto'
            }}
            >
            {/* Summary */}
            <p className="recipeSummary" dangerouslySetInnerHTML={{__html:details.summary}}></p>
            {/* Ingredients */}

            <Ingredients ingredients={details.extendedIngredients || []}/>
            {/* Instructions */}

            <p className="recipeSummary">
                {details.instructions}
            </p>
            </div>
        </div>
    )
}

export default RecipeDetails;