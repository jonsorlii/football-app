import React, {useState, useEffect} from 'react'
import {YourAPI} from '../API.js'
import Axios from 'axios'
import styled from 'styled-components' 


function WorldCup() {
    const [winnerTeam, setWinnerTeam] = useState([]); 

    
     useEffect(() => {
        Axios.get(`http://api.football-data.org/v2/competitions/2000`, YourAPI).then((response) => {
            setWinnerTeam(response.data.seasons)
            console.log(response.data.seasons)
        }); 
    }, [])

  return (
  <DataDiv>
    <Header> Previuos World Cup Winners</Header>
    {winnerTeam.map((team) => (
        <TeamCard> 
            <Image src = {team.winner.crestUrl}/>
            <Name> {team.winner.name} </Name> 
            <Name> Year: {team.endDate.slice(0,4)} </Name> 
        </TeamCard>
    ))}
  </DataDiv>);
}

export default WorldCup;

const DataDiv = styled.div`
    text-align: center
`

const TeamCard = styled.div`
	background-color: #fafafa;
	border: 1px solid rgba(0,0,0,0.1);
	border-radius: 7px;
	margin: 5px;
	position: auto;
    display: inline-block;
	width: 125px;
    height: 20 px; 
`;

const Header = styled.div`
    text-align:center;
    font-family: 'Muli', sans-serif;
    position: relative;
    font-size: 2em;
`;

const Name = styled.div`
    font-size : 1em; 
    float : left;
    vertical-align: top;
`

const Image = styled.img`
	float:left;
    width: 40px;
	height: 40px;
	z-index: 2;
	object-fit: cover;
    padding : 2px
`;
