import PropTypes from "prop-types";
const Cooking = ({ cooking, index ,handleCurrentlyCooking}) => {
  const { recipe_name, preparing_time, calories } = cooking;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-xs">
          <tbody>
            {
              <tr className="hover">
                <th className="text-xs ">{index + 1}</th>
                <td className="text-xs ">{recipe_name}</td>
                <td className="text-xs ">{preparing_time}</td>
                <td className="text-xs ">{calories}</td>
                <td className="">
                  <button onClick={()=>handleCurrentlyCooking(index)} className="text-[#150B2B] bg-[#0BE58A] px-3 py-1 rounded-2xl">
                    Preparing
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
Cooking.propTypes = {
  cooking: PropTypes.object,
  index: PropTypes.number,
  handleCurrentlyCooking:PropTypes.func
};

export default Cooking;
