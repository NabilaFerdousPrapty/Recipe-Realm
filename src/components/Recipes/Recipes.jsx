
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({handleSetCooking}) => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('Recipes.json')
        .then(response=>response.json())
        .then(data=> setRecipes(data))
    },[])
    return (
        <>
        <div className="md:w-2/3 grid md:grid-cols-2 grid-cols-1 md:gap-4">
           
            {
                recipes.map((recipe,index)=><Recipe recipe={recipe} key={index}    handleSetCooking={(recipe, time, calories) =>
                    handleSetCooking(recipe, time, calories)}></Recipe>)
            }
        </div>
        </>
    );
};
Recipes.propTypes = {
    
    handleSetCooking:PropTypes.func
  };
export default Recipes;