import React from 'react'
import styled from 'styled-components'; 


function Match({homeTeam, awayTeam, status, score , utcDate, matchday}) {
    return(
  <>
    {status === 'SCHEDULED' ? 
      <MatchCard>  
        <TeamNames > {homeTeam.name} - {awayTeam.name} </TeamNames>
        <Date> {utcDate.slice(0,10)} </Date>  
        <Time> {utcDate.slice(11,16)} </Time>
      </MatchCard> 
      : 
      <MatchCard>  
        <Status> {status} </Status> 
        <Date> {utcDate.slice(0,10)} </Date>  
        <Time> {utcDate.slice(11,16)} </Time>
        {status === 'FINISHED' ?
          <Score>FT: {score.fullTime.homeTeam} - {score.fullTime.awayTeam}</Score> 
        : 
          null
        }
        <TeamNames > {homeTeam.name} - {awayTeam.name} </TeamNames>
      </MatchCard>}
  </>
);}

export default Match;

const MatchCard = styled.div`
padding-top: 10px;
flex-wrap: wrap;
max-width: auto;
padding : 15px
`

const TeamNames = styled.div`
justify-content: center;
  display:flex; 
	font-size: 15px;
	height: 100%;
	vertical-align: top;
`;

const Date = styled.div`
	font-size: 10px;
	padding: 3px;
  textAlignVertical: center;
  justify-content: center;
  display:flex; 
`;

const Time = styled.div`
	font-size: 10px;
	padding: 3px;
  textAlignVertical: center;
  justify-content: center;
  display:flex; 
`;

const Status = styled.div`
  font-size: 10px;
	padding: 3px;
  textAlignVertical: center;
  justify-content: center;
  display:flex; 
`

const Score = styled.div`
  font-size: 10px;
	padding: 3px;
  textAlignVertical: center;
  justify-content: center;
  display:flex; 
`