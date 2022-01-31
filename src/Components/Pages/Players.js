import React, {useState} from 'react'
import Axios from 'axios'
import styled from 'styled-components' 
import 'react-dropdown/style.css';
import {YourAPI} from '../API.js'

import TeamComponent from '../TeamComponent.js'

function Teams() {

    const [teamsList, setTeamsList] = useState([]); 
    const [team, setTeam] = useState([]); 

    
    const getTeams = (id) => {
        Axios.get(`http://api.football-data.org/v2/competitions/${id}/teams`, YourAPI).then((response) => {
            setTeamsList(response.data.teams)
            setTeam([])
        }); 
    }

    const getTeam = (teamid) => {
         Axios.get(`http://api.football-data.org/v2/teams/${teamid}`, YourAPI).then((response) => {
            setTeam(response.data)
            console.log(team)
        }); 
    }
    
    
    return (
       <>
        <form> 
            Pick your league and favourite team to see its players:
                <select onChange = {(e) => {getTeams(e.target.value)}}>    
                    <option> --- </option>     
                    <option value={2021}>Premier League</option>
                    <option value={2002}>Bundesliga</option>
                    <option value={2014}>Primera Division</option>
                    <option value={2015}>Ligue1</option>
                    <option value={2019}>Serie A</option>
                </select>       
                <select onChange = {(e) => {getTeam(e.target.value)}}>
                        <option> No Team</option>  
                        {teamsList.length > 0 ? teamsList.map((team) => (
                            <option key = {team.id} value={team.id}>{team.name}</option>))
                        :
                            null   
                        }
                </select>
        </form> 
            <Players> 
                {team.length === 0 ? 
                    null
                :
                    <TeamComponent key = {team}  team = {team}/> 
                }                
            </Players> 

        </> 
    );}

export default Teams;



const Players = styled.div`
flex-wrap: wrap;
max-width: auto;
padding : 1px; 
text-align: center
`

