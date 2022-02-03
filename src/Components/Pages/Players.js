import React, {useState} from 'react'
import Axios from 'axios'
import styled from 'styled-components' 
import {YourAPI} from '../API.js'
import "../static/Players.css";

import TeamComponent from '../TeamComponent.js'

function Teams() {
    
    const [teamsList, setTeamsList] = useState([]); 
    const [team, setTeam] = useState([]); 

    //Getting teams out of the chosen league
    const getTeams = (id) => {
        Axios.get(`http://api.football-data.org/v2/competitions/${id}/teams`, YourAPI).then((response) => {
            setTeamsList(response.data.teams)
            setTeam([])
        }); 
    }

    //Getting team out of the chosen team, whit the belonging key
    const getTeam = (teamid) => {
         Axios.get(`http://api.football-data.org/v2/teams/${teamid}`, YourAPI).then((response) => {
            setTeam(response.data)
        }); 
    }
    return (
        <div>
            <div className = "toptext">
                Pick your league and favourite team to see its players:
            </div>
                <div className = "select"> 
                        <select onChange = {(e) => {getTeams(e.target.value)}}>    
                            <option> --- </option>     
                            <option value={2021}>Premier League</option>
                            <option value={2002}>Bundesliga</option>
                            <option value={2014}>Primera Division</option>
                            <option value={2015}>Ligue1</option>
                            <option value={2019}>Serie A</option>
                        </select>       
                        <select onChange = {(e) => {getTeam(e.target.value)}}>
                                <option>---</option>  
                                {teamsList.length > 0 ? teamsList.map((team) => (
                                    <option key = {team.id} value={team.id}>{team.name}</option>))
                                :
                                    null   
                                }
                        </select>
                </div> 
                <Players> 
                    {team.length === 0 ? 
                        null
                    :
                        <TeamComponent key = {team}  team = {team}/> 
                    }                
                </Players> 
        </div> 
    );}

export default Teams;



const Players = styled.div`
flex-wrap: wrap;
max-width: auto;
padding : 1px; 
text-align: center
`