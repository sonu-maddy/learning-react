import React from 'react'
import { useState } from 'react'

export default function LudoBoard() {
    // let [blueMoves, setBlueMoves] = useState(0);
    // let [yellowMoves, setYellowMoves] = useState(0);
    // let [greenMoves, setGreenMoves] = useState(0);      
    // let [redMoves, setRedMoves] = useState(0); 
    
    let [moves, setMoves] = useState({
        blue: 0, 
        yellow: 0,
        green: 0,   
        red: 0});

        let incrementBlueMove = () => {
            console.log(`Incrementing Blue Moves = ${moves.blue}` );
            setMoves((prevMoves) => {    
               return {...prevMoves, blue: prevMoves.blue + 1 }  
            });
            }

    let incrementYellowMove = () => {
        console.log(`Incrementing Yellow Moves = ${moves.yellow}` );     
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1 } 
        });
    }

    let incrementGreenMove = () => {
        console.log(`Incrementing Green Moves = ${moves.green}` );   
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1 }   
        });
    }

    let incrementRedMove = () => {
        console.log(`Incrementing Red Moves = ${moves.red}` );
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1 }
        });
    }


  return (
    <div>
        <p>Ludo Board</p>
        <div className="ludo-board">
            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor : "blue"}} onClick={incrementBlueMove}>+1</button>

            <p>Yellow Moves = {moves.yellow}</p>
            <button style={{backgroundColor : "yellow" ,color:"black" }} onClick={incrementYellowMove}>+1</button>

            <p>Green Moves = {moves.green}</p>
            <button style={{backgroundColor : "green"}} onClick={incrementGreenMove}>+1</button>

            <p>Red Moves = {moves.red}</p>
            <button style={{backgroundColor : "red"}} onClick={incrementRedMove}>+1</button>
        </div>
    </div>
  )
}
