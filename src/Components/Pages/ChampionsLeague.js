import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {YourAPI, clDateStart, clDateEnd} from '../API.js'
import Match from '../Match.js';
import styled from 'styled-components' 


function ChampionsLeague() {
  const [competitionInfo, setInfoList] = useState([]);

  useEffect(() => {
        Axios.get(`http://api.football-data.org/v2/competitions/2001/matches?dateFrom=${clDateStart}&dateTo=${clDateEnd}`, YourAPI).then((response) => {
            setInfoList(response.data.matches)
            console.log(response.data)
        }); 
    }, [])
  return( 
  <ContentDivMatch> 
            <Header >Previous and upcoming CL matches (+/- 1 month)</Header>
            {competitionInfo.map((match) => (

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