import React from 'react';

export default function Ingredients(props){

    const {ingredients} = props;
    return(
        <div className="ingredientWrapper">
            {
                ingredients.map(_ingredient=>{
                return <Ingredient ingredient={_ingredient}/>
                })
            }
        </div>
    )
}

function Ingredient(props){
    return(<div className="ingredeint">
        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${props.ingredient.image}`} />
        <span>{props.ingredient.name}</span>
    </div>)
}