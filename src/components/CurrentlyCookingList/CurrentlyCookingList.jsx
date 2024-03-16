import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import PropTypes from "prop-types";
const CurrentlyCookingList = ({currentlyCooking,totalTime,totalCalory}) => {
    return (<>
        <div>
            <h2 className="text-3xl lexend-semi-bold border-b-2 border-[#28282826]">Currently cooking:{currentlyCooking}</h2>
            <table className="table text-xs">
    <thead>
      <tr>
        <th className="">No</th>
        <th className="">Name</th>
        <th className="">Time</th>
        <th className="">Calories</th>
        
      </tr>
    </thead>
  </table>
            <CurrentlyCooking></CurrentlyCooking>
        </div>
        <div>
           <h2>Total Time ={totalTime} </h2>
           <h2>
           Total Calories ={totalCalory} 
           </h2>
        </div>
        </>
    );
};

CurrentlyCookingList.propTypes = {
    currentlyCooking:PropTypes.number,
    totalTime:PropTypes.number,
    totalCalory:PropTypes.number
    
  };
export default CurrentlyCookingList;