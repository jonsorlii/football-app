import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {YourAPI, clDateStart, clDateEnd} from '../API.js'
import Match from '../Match.js';
import styled from 'styled-components' 


function ChampionsLeague() {
  
  const [competitionInfo, setInfoList] = useState([]);

  //Get CL matches 
  useEffect(() => {
        Axios.get(`http://api.football-data.org/v2/competitions/2001/matches?dateFrom=${clDateStart}&dateTo=${clDateEnd}`, YourAPI).then((response) => {
            setInfoList(response.data.matches)
            console.log(clDateStart)
        }); 
    }, [])
  return( 
  <ContentDivMatch> 
    <Header >Upcoming CL matches</Header>
    {competitionInfo.map((match) => (
      <MatchCard key = {match.id} >
        <Match 
        key = {match.id} 
        homeTeam = {match.homeTeam}
        awayTeam = {match.awayTeam}
        status = {match.status} 
        score = {match.score}
        utcDate = {match.utcDate}
        matchday = {match.season.currentMatchday}
        stage = {match.stage}
        /> 
      </MatchCard>
    ))}
    </ContentDivMatch>
  );
}

export default ChampionsLeague;

const ContentDivMatch = styled.div`
float:center;
flex-wrap: wrap;
max-width: auto;
padding : 10px
`

const Header = styled.div `
text-align:center;
font-family: 'Muli', sans-serif;
position: relative;
font-size: 2em;
`;

const MatchCard = styled.div`
background-color: #fafafa;
border: solid 1px rgba(0, 0, 0, 0.08);
border-radius: 7px;
margin: 5px;
display: inline-block;
width: 400px;
height: 20 px; 
overflow: hidden;
`;
