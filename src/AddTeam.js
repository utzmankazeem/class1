import { FaPlus } from "react-icons/fa"
const AddTeam = ({addTeam, setAddTeam, teamAddition}) => {
  return (
    <form className="addTeam">
        <label htmlFor= "addTeam" >  Add Team  </label>
        <input 
          autoFocus
          id="addTeam"
          type="text"
          placeholder="Add Team"
          required
          value={addTeam}
          onChange={(e) => setAddTeam (e.target.value)}
        />
        <button
          type="submit"
          aria-label="addTeam"
        > 
          <FaPlus />
        </button>   
    </form>
  )
}

export default AddTeam