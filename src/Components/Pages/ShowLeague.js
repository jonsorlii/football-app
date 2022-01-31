import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {useLocation} from "react-router-dom";
import Table from '../Standings.js';
import Match from '../Match.js';
import styled from 'styled-components' 
import {YourAPI, startdate, enddate} from '../API.js'

function ShowLeague(props) {    

    const {state} = useLocation ();
    
    const [standingList, setStandingList] = useState([]); 
    const [competitionInfo, setInfoList] = useState([]);
    const [matchInfo, setMatchList] = useState([])
    
    const tableHeader = () =>
        <div style={{ display: "flex"}}>
            <Number>P</Number>
            <TeamName>Team</TeamName>
            <Number>G</Number>
            <Number>W</Number>
            <Number>D</Number>
            <Number>L</Number>
            <Number>GD</Number>
            <NumberLast>Pts</NumberLast>
        </div>

    useEffect(() => {
        Axios.get(`http://api.football-data.org/v2/competitions/${state}/standings`, YourAPI).then((response) => {
            const league = response.data.competition
            let standings = response.data.standings[0]
            setStandingList(standings.table)
            setInfoList(league) 
        }); 
    }, [])

    useEffect(() => {
        Axios.get(`http://api.football-data.org/v2/competitions/${state}/matches?dateFrom=${startdate}&dateTo=${enddate}`, YourAPI).then((response) => {
            const match = response.data.matches 
            setMatchList(match)
            console.log(match)
        }); 
    }, [])

    return(
    <div>
        <ContentDivTable>
            <Header >{competitionInfo.name} standings</Header>
            {tableHeader()}
            {standingList.map((Team) => (
                <Table 
                    key={Team.team.id} 
                    position = {Team.position} 
                    icon = {Team.team.crestUrl} 
                    name = {Team.team.name} 
                    gamesPlayed = {Team.playedGames} 
                    win = {Team.won} 
                    draw = {Team.draw}
                    lost = {Team.lost}
                    goalDifference = {Team.goalDifference}
                    points = {Team.points}
                /> 
            ))}
        </ContentDivTable>
        <ContentDivMatch> 
            <Header >Fixtures</Header>
            {matchInfo.map((match) => (

                <Match 
                key = {match.id} 
                homeTeam = {match.homeTeam}
                awayTeam = {match.awayTeam}
                status = {match.status} 
                score = {match.score}
                utcDate = {match.utcDate}
                matchday = {match.season.currentMatchday}
                /> 
            ))}
        </ContentDivMatch>
    </div>
);}

export default ShowLeague;

const Number = styled.div`
width: 2em;
padding: .5em;
border: solid #360037 1px;
border-right: 0;
font-weight: 400;
`

//These are probably to much: 
const NumberLast = styled.div`
width: 2em;
padding: .5em;
border: solid #360037 1px;
border-right: 1;
font-weight: 400;
`
const TeamName = styled.div`
width: 12em;
padding: .5em;
border: solid #360037 1px;
border-right: 0;
font-weight: 400;
`

const ContentDivTable = styled.div`

float : left;
justify-content: left; 
flex-wrap: wrap;
max-width: auto;
align-items: flex-start;
padding : 10px
`

const ContentDivMatch = styled.div`
float:left;
flex-wrap: wrap;
max-width: auto;
align-items: flex-start;
padding : 10px
`
const Header = styled.div `
text-align:center;
font-family: 'Muli', sans-serif;
position: relative;
font-size: 2em;
`;