import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { VscFlame } from "react-icons/vsc";
import { LuDot } from "react-icons/lu";


const Recipe = ({ recipe, handleSetCooking,notify }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
 
  return (
    <div>
     
      <div className="card w-auto bg-base-100 shadow-xl lg:h-[708px] text-left">
        <figure>
          <img
            src={recipe_image}
            alt="recipie"
            className=" lg:w-80 rounded-3xl"
          />
        </figure>
        <div className="card-body px-2">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-[#878787]">{short_description}</p>
          <p>Ingredients: {ingredients.length}</p>
          
            <ul className="text-[#878787]">
              {ingredients.map((ingredient, index) => (
                <li className="md:flex items-center justify-start" key={index}>
                  <LuDot />
                  {ingredient}
                </li>
              ))}
            </ul>
        

          <div className="text-[#878787] md:flex justify-between items-center">
            <p className="md:flex items-center">
              <CiClock2 />
              {preparing_time} minutes
            </p>
            <p className="md:flex items-center">
              <VscFlame />
              {calories}calories
            </p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => {
                handleSetCooking(recipe,preparing_time,calories);
                notify()
                
              }}
              className=" bg-[#0BE58A] text-[#150B2B] md:px-6 md:py-2 rounded-3xl px-3 "
            >
              Want to Cook
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleSetCooking: PropTypes.func,
  notify:PropTypes.func
};
export default Recipe;
