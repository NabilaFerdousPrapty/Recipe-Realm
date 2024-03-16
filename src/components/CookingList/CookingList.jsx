import PropTypes from "prop-types";
import Cooking from "../Cooking/Cooking";

const CookingList = ({cookingList}) => {
  
    return (
        <div className="md:w-1/3 border-2 border-[#28282833] rounded-3xl">
            <h2 className="text-center text-3xl lexend-semi-bold pb-4 border-b-2 border-[#28282826] mx-8">Want to cook:{cookingList.length}</h2>
            <table className="table">
            <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th>Status</th>
      </tr>
    </thead>
            </table>

            {
                cookingList.map((cooking,index)=><Cooking cooking={cooking} key={cooking.recipe_id} index={index}></Cooking>)
            }
            
   
        </div>
    );
};
CookingList.propTypes = {
  
  cookingList:PropTypes.array
};

export default CookingList;