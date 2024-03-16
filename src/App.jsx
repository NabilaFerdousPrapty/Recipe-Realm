import { useEffect, useState } from "react";
import "./App.css";
import CookingList from "./components/CookingList/CookingList";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [totalTime, setTotalTime] = useState(0);
  let [totalCalory, setTotalCalory] = useState(0);
  const [cookingList, setCookingList] = useState([]);
  useEffect(() => {}, []);

  const handleSetCooking = (recipe, time, calories) => {
    console.log("Add to cooking");
    console.log(recipe);

    // Check if the recipe already exists in the cooking list
    const recipeExists = cookingList.some(item => item.recipe_name === recipe.recipe_name);
    if (recipeExists) {
      notify(); 
    } else {
      
      setTotalTime(totalTime + time);
      setTotalCalory(totalCalory + calories);
      const cookingLists = [...cookingList, recipe];
      setCookingList(cookingLists);
    }
  };

  const notify = () => toast.warning("Recipe already exists in the list!");

  return (
    <>
      <Header />
      <div className="mt-8 my-4">
        <h1 className="lg:text-4xl text-xl lexend-semi-bold text-[#150B2B]">
          Our Recipes
        </h1>
        <p className="text-[#150B2B99] my-4">
          Welcome to our collection of delicious recipes! Whether you&apos;re a seasoned chef or just starting out in the kitchen, <br /> you&apos;ll find something here to tantalize your taste buds. From mouthwatering appetizers to decadent desserts, we&apos;ve got you covered. <br /> Take a culinary journey with us and discover new flavors and techniques along the way.
        </p>
      </div>
      <div className="md:flex justify-between gap-8">
        <Recipes handleSetCooking={handleSetCooking} />
        <CookingList cookingList={cookingList} totalTime={totalTime} totalCalory={totalCalory} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
