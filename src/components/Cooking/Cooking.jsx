
import PropTypes from "prop-types";
const Cooking = ({cooking,index}) => {
    const {recipe_name,preparing_time,calories}=cooking;
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    <tbody>
    {
     
      <tr className="hover">
        <th>{index+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button className="text-[#150B2B] bg-[#0BE58A] px-3 py-1 rounded-2xl">Preparing</button></td>
      </tr>
     }
    </tbody>
  </table>
</div>
        </div>
    );
};
Cooking.propTypes={
    cooking:PropTypes.object,
    index:PropTypes.number
}

export default Cooking;