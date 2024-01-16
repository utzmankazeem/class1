import Teams from "./Teams"

const TeamList = ({ teams, handleClick, deleteTeams }) => {
    return (
            <ul>
            {teams.map((team) => {
                return (
                    <Teams 
                        team = {team}
                        handleClick={ handleClick}
                        deleteTeams={deleteTeams}
                    />
                    )
                })
            }
            </ul>
    )
}

export default TeamList