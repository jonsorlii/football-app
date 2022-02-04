import React from 'react'
import styled from 'styled-components' 
import moment from 'moment';

function TeamComponent({team}) {
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
                <Data> Position: {player.position} </Data> 
                <Data> Nationality: {player.nationality} </Data>
                <Data> Age: {moment().diff(player.dateOfBirth, 'years')} </Data>
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
font-family Montserrat, sans-serif
position: relative;
font-size: 2em;
`;

const Header2 = styled(Header)`
font-size : 1em; 
`

const PlayerCard = styled.div`
background-color: #fafafa;
border: solid 1px rgba(0, 0, 0, 0.08);
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
font-family Montserrat, sans-serif
`

const Data = styled(PlayerName)`
font-size: 0.7em;
`
