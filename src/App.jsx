import { useEffect, useState } from "react";
import "./App.css";
import CookingList from "./components/CookingList/CookingList";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [totalTime, setTotalTime] = useState(0);
  let [totalCalory, setTotalCalory] = useState(0);
  const [cookingList, setCookingList] = useState([]);
  const [currentlyCookingList, setCurrentlyCookingList] = useState([]);
  useEffect(() => {}, []);

  const handleSetCooking = (recipe) => {
    console.log("Add to cooking");
    console.log(recipe);

    // Check if the recipe already exists in the cooking list
    const recipeExists = cookingList.some(
      (item) => item.recipe_name === recipe.recipe_name
    );
    if (recipeExists) {
      notify();
    } else {
     
      const cookingLists = [...cookingList, recipe];
      setCookingList(cookingLists);
    }
  };
  const handleCurrentlyCooking = (index) => {
    // Remove the selected recipe from the cooking list
    const selectedRecipe = cookingList[index];
    const updatedCookingList = cookingList.filter((_, i) => i !== index);
    setCookingList(updatedCookingList);

    // Add the selected recipe to the currently cooking list
    const updatedCurrentlyCookingList = [...currentlyCookingList,selectedRecipe,];
   
    setCurrentlyCookingList(updatedCurrentlyCookingList);
    console.log("currently cooking list");
    console.log(currentlyCookingList);
    console.log('updated');
    console.log(updatedCurrentlyCookingList);
   
  };

  const countCaloriesTime=(time, calories)=>{
    setTotalTime(totalTime + time);
      setTotalCalory(totalCalory + calories);

  }
  const notify = () => toast.warning("Recipe already exists in the list!");

  return (
    <>
      <Header />
      <div className="mt-8 my-4">
        <h1 className="lg:text-4xl text-xl lexend-semi-bold text-[#150B2B]">
          Our Recipes
        </h1>
        <p className="text-[#150B2B99] my-4">
          Welcome to our collection of delicious recipes! Whether you&apos;re a
          seasoned chef or just starting out in the kitchen, <br /> you&apos;ll
          find something here to tantalize your taste buds. From mouthwatering
          appetizers to decadent desserts, we&apos;ve got you covered. <br />{" "}
          Take a culinary journey with us and discover new flavors and
          techniques along the way.
        </p>
      </div>
      <div className="md:flex justify-between gap-8">
        <Recipes handleSetCooking={handleSetCooking} />
        <CookingList
          cookingList={cookingList}
          totalTime={totalTime}
          totalCalory={totalCalory}
          handleCurrentlyCooking={handleCurrentlyCooking} 
          currentlyCookingList={currentlyCookingList}
          countCaloriesTime={countCaloriesTime}
        />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
