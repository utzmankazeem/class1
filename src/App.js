import { useState } from 'react'
import Header from './Header';
import AddTeam from './AddTeam';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [teams, setTeam] = useState([
    {
        id: 1,
        checked: false,
        team: "Barcer"
    },
    {
        id: 2,
        checked: true,
        team: "Real"
    },
    {
        id: 3,
        checked: false,
        team: "United"
    }
])

const [addTeam, setAddTeam] = useState('')

const handleClick = (id) => {
    const teamList = teams.map((team)=> team.id === id ? {
    ...team, checked: !team.checked}: team );
    setTeam(teamList);
    localStorage.setItem('teamStorage', JSON.stringify(teamList))
}
const deleteTeams = (id) => {
    const delTeam = teams.filter((team)=> team.id !== id)
    setTeam(delTeam)
}
const teamAddition = (e) => {
  console.log(e)
}
  return (
    <div className="App">
      <Header title="My Teams"/>
      <AddTeam 
        addTeam = {addTeam}
        setAddTeam = {setAddTeam}
        teamAddition = {teamAddition}
      />
      <Main 
        teams = {teams}
        setTeam = {setTeam}
        handleClick = {handleClick}
        deleteTeams = {deleteTeams}
      />
      <Footer length = {teams.length}/>
    </div>
  );
}

export default App;
