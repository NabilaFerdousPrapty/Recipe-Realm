import { useEffect, useState } from "react";
import "./App.css";
import CookingList from "./components/CookingList/CookingList";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
  const [cookingList, setCookingList] = useState([]);
  useEffect(() => {}, []);
  const handleSetCooking = (recipe) => {
    console.log("Add to cooking");
    console.log(recipe);
    const cookingLists = [...cookingList, recipe];
    setCookingList(cookingLists);
  };

  return (
    <>
      <Header></Header>
      <div className="mt-8 my-4">
        <h1 className="lg:text-4xl text-xl lexend-semi-bold text-[#150B2B]">
          Our Recipes
        </h1>
        <p className="text-[#150B2B99] my-4">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className="md:flex justify-between gap-8">
        <Recipes handleSetCooking={handleSetCooking}></Recipes>
        <CookingList cookingList={cookingList}></CookingList>
      </div>
    </>
  );
}

export default App;
