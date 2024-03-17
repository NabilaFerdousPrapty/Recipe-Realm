import PropTypes from "prop-types";
import Cooking from "../Cooking/Cooking";
import CurrentlyCookingList from "../CurrentlyCookingList/CurrentlyCookingList";

const CookingList = ({ cookingList,totalTime,totalCalory,handleCurrentlyCooking,currentlyCookingList,countCaloriesTime}) => {
 
  
  
  return (
    <div className="lg:w-1/3 border-2 border-[#28282833] rounded-3xl pt-8">
     <div>
     <h2 className="text-center text-3xl lexend-semi-bold pb-4 border-b-2 border-[#28282826] mx-8">
        Want to cook:{cookingList.length}
      </h2>
      <div className="overflow-x-auto">
  <table className="table text-xs px-0">
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
          countCaloriesTime={countCaloriesTime}

        ></Cooking>
      ))}
      {}
     </div>
     <div className=" mt-8 border-b-2 border-[#28282826] lg:mx-6">
      <CurrentlyCookingList handleCurrentlyCooking={handleCurrentlyCooking}  totalTime={totalTime} totalCalory={totalCalory} currentlyCookingList={currentlyCookingList} ></CurrentlyCookingList>

     </div>
    </div>
  );
};
CookingList.propTypes = {
  cookingList: PropTypes.array,
  totalTime:PropTypes.number,
  totalCalory:PropTypes.number,
  handleCurrentlyCooking:PropTypes.func,
  currentlyCookingList:PropTypes.array,
  countCaloriesTime:PropTypes.func
};

export default CookingList;
