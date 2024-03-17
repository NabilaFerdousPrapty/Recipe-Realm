import PropTypes from "prop-types";
const Cooking = ({
  cooking,
  index,
  handleCurrentlyCooking,
  countCaloriesTime,
}) => {
  const { recipe_name, preparing_time, calories } = cooking;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-xs ">
          <tbody>
            {
              <tr className="hover bg-[#2828281a] rounded-3xl">
                <th className="text-xs ">{index + 1}</th>
                <td className="text-xs ">{recipe_name}</td>
                <td className="text-xs ">{preparing_time}</td>
                <td className="text-xs ">{calories}</td>
                <td className="">
                  <button
                    onClick={() => {
                      handleCurrentlyCooking(index);
                      countCaloriesTime(preparing_time, calories);
                    }}
                    className="text-[#150B2B] bg-[#0BE58A] px-3 py-1 rounded-2xl"
                  >
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
  handleCurrentlyCooking: PropTypes.func,
  countCaloriesTime: PropTypes.func,
};

export default Cooking;
