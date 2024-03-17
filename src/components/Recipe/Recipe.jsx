import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { VscFlame } from "react-icons/vsc";
import { LuDot } from "react-icons/lu";

const Recipe = ({ recipe, handleSetCooking }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="py-2">
      <div className="card card-compact w-auto bg-base-100 shadow-xl lg:h-[708px] md:h-[750px] text-left border-2 border-[#28282833] px-2 mx-0">
        <figure>
          <img
            src={recipe_image}
            alt="recipie"
            className=" lg:w-80 rounded-3xl "
          />
        </figure>
        <div className="card-body md:px-2">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-[#878787]">{short_description}</p>
          <p className="lexend-medium">Ingredients: {ingredients.length}</p>

          <ul className="text-[#878787]">
            {ingredients.map((ingredient, index) => (
              <li className="flex items-center justify-start" key={index}>
                <LuDot />
                {ingredient}
              </li>
            ))}
          </ul>

          <div className="text-[#878787] flex justify-between items-center">
            <p className="flex items-center">
              <CiClock2 />
              {preparing_time} minutes
            </p>
            <p className="flex items-center">
              <VscFlame />
              {calories}calories
            </p>
          </div>
          <div className="card-actions py-2">
            <button
              onClick={() => {
                handleSetCooking(recipe);
              }}
              className=" bg-[#0BE58A] text-[#150B2B] md:px-6 md:py-2 rounded-3xl px-3 py-1 "
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
};
export default Recipe;
