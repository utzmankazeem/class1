import TeamList from "./TeamList"
const Main = ({teams, handleClick, deleteTeams}) => {

    return (
        <main>
            { teams.length ?
                (<TeamList 
                    teams = {teams}
                    handleClick = {handleClick}
                    deleteTeams = {deleteTeams}

                />) :
                (<p style={{margin: 'auto'}}>No teams to display</p>)
            }
        </main>
    )
}
export default Main