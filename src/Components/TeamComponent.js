import React, {useState, useEffect} from 'react'
import styled from 'styled-components' 
import 'react-dropdown/style.css';
import moment from 'moment';

function TeamComponent({team}) {
    let DOB = 0; 
  return(
    <> 
        <Header> <Image src = {team.crestUrl}/>{team.name}</Header>
        <Header2> Stadium: {team.venue} </Header2>
        <Header2> Founded: {team.founded} </Header2>
        <Header2><a href = {team.website} target="_blank"> Read more </a> </Header2>
        <Squad >
            {team.squad.map((player) => (
                <PlayerCard key = {player.id }> 
                <PlayerName> {player.name}  </PlayerName>
                <Position> Position: {player.position} </Position> 
                <Nationality> Nationality: {player.nationality} </Nationality>
                <Age> Age: {moment().diff(player.dateOfBirth, 'years')} </Age>
                </PlayerCard>
            ))
            }
        </Squad> 
    </>
);}

export default TeamComponent;

const Squad = styled.div`
    position : absolute; 
    float : left;
    justify-content: left; 
    flex-wrap: wrap;
    max-width: auto;
    align-items: flex-start;
    padding : 10px
    padding-top = 1px;
`
const Image = styled.img`
	display: block;
	width: 40px;
	height: 40px;
	z-index: 2;
	object-fit: cover;
    padding : 2px
`;

const Header = styled.div`
    display:flex; 
    text-align:center;
    font-family: 'Muli', sans-serif;
    position: relative;
    font-size: 2em;
`;

const Header2 = styled(Header)`
    font-size : 1em; 
`

const PlayerCard = styled.div`
	background-color: #fafafa;
	border: 1px solid rgba(0,0,0,0.1);
	border-radius: 7px;
    vertical-align: top;
	margin: 5px;
	position: relative;
    display: inline-block;
	width: 150px;
    height: 20 px; 
    overflow: hidden;
`;

const PlayerName = styled.div`
    font-size: 1em;
`

const Position = styled.div`
    font-size: 0.7em;
`

const Nationality = styled.div`
    font-size: 0.7em;
`
const Age = styled.div`
    font-size: 0.7em;
`
