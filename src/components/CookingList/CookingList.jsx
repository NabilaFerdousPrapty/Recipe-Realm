import PropTypes from "prop-types";
import Cooking from "../Cooking/Cooking";
import CurrentlyCookingList from "../CurrentlyCookingList/CurrentlyCookingList";
let currentlyCooking=0;
const CookingList = ({ cookingList,totalTime,totalCalory }) => {
 
  const handleCurrentlyCooking=()=>{
    currentlyCooking=currentlyCooking+1;
    // console.log(currentlyCooking);
  }
  
  return (
    <div className="md:w-1/3 border-2 border-[#28282833] rounded-3xl">
     <div>
     <h2 className="text-center text-3xl lexend-semi-bold pb-4 border-b-2 border-[#28282826] mx-8">
        Want to cook:{cookingList.length}
      </h2>
      <div className="overflow-x-auto">
  <table className="table text-xs">
    <thead>
      <tr>
        <th className="">No</th>
        <th className="">Name</th>
        <th className="">Time</th>
        <th className="">Calories</th>
        <th className="">Status</th>
      </tr>
    </thead>
  </table>
</div>

      {cookingList.map((cooking, index) => (
        <Cooking
        
          cooking={cooking}
          key={cooking.recipe_id}
          index={index}
          handleCurrentlyCooking={handleCurrentlyCooking}

        ></Cooking>
      ))}
     </div>
     <div className=" mt-8 border-b-2 border-[#28282826] mx-6">
      <CurrentlyCookingList currentlyCooking={currentlyCooking} totalTime={totalTime} totalCalory={totalCalory} ></CurrentlyCookingList>

     </div>
    </div>
  );
};
CookingList.propTypes = {
  cookingList: PropTypes.array,
};

export default CookingList;
