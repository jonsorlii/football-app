import React from 'react';
import styled from 'styled-components' 

function Table({position, icon, name, gamesPlayed, win, draw, lost, goalDifference, points}) {
    return (
        <TableRow >
            <TableNumberFirst> {position} </TableNumberFirst> 
            <TableIconName> <Image src = {icon}/> {name} </TableIconName> 
            <TableNumber> {gamesPlayed} </TableNumber> 
            <TableNumber> {win} </TableNumber> 
            <TableNumber> {draw} </TableNumber> 
            <TableNumber> {lost} </TableNumber>
            <TableNumber> {goalDifference} </TableNumber>
            <TableNumberLast> {points} </TableNumberLast>
        </TableRow> 
    );
}
export default Table;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
`

const TableIconName = styled.div`
position: relative;
    padding: .5em;
    width : 12em;
    border-bottom: solid #360037 1px;
    border-left: 0;
    display: flex;
   align-items:center;
`

//These are probably to much: 
const TableNumber = styled.div`
    box-sizing: content-box;
    padding: .5em;
    width: 2em;
    border: solid #360037 1px;
    border-top: 0;
    border-right: 0;
`
const TableNumberLast = styled.div`
    box-sizing: content-box;
    padding: .5em;
    width: 2em;
    border: solid #360037 1px;
    border-top: 0;
    border-right: 1;
`

const TableNumberFirst = styled.div`
    box-sizing: content-box;
    padding: .5em;
    width: 2em;
    border: solid #360037 1px;
    border-top: 0;
    border-right: 1;
`

const Image = styled.img`
	display: block;
	width: 25px;
	height: 25px;
	z-index: 2;
	object-fit: cover;
    padding : 2px
`;
