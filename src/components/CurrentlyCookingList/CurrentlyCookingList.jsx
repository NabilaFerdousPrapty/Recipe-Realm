import PropTypes from "prop-types";

const CurrentlyCookingList = ({
  totalTime,
  totalCalory,
  currentlyCookingList,
}) => {
  return (
    <>
      <div>
        <h2 className="text-3xl lexend-semi-bold border-b-2 border-[#28282826]">
          Currently cooking:{currentlyCookingList.length}
        </h2>
       <div className="overflow-x-auto">
       <table className="table text-xs">
          <thead className="">
            <tr>
              <th className="">No</th>
              <th className="">Name</th>
              <th className="">Time</th>
              <th className="">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-[#2828281a] rounded-3xl" >
            {currentlyCookingList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time}</td>
                <td>{item.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
      <div className="flex justify-end items-center mt-6 gap-4">
        <h2>
          Total Time
          <br /> ={totalTime} minutes{" "}
        </h2>
        <h2>
          Total Calories
          <br /> = {totalCalory} calories
        </h2>
      </div>
    </>
  );
};

CurrentlyCookingList.propTypes = {
  currentlyCooking: PropTypes.number,
  totalTime: PropTypes.number,
  totalCalory: PropTypes.number,
  currentlyCookingList: PropTypes.array,
};
export default CurrentlyCookingList;
