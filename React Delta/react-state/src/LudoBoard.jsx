import { useState } from "react"
export default function LudoBoard(){
    let [moves, setMoves] = useState({blue : 0, red : 0, yellow : 0, green : 0});
    function blueHandler() {
        setMoves((prevMoves) => {
            return {...prevMoves, blue : prevMoves.blue + 1}
        });
    }
    function redHandler() {
        setMoves((moves) => {
            return {...moves, red : moves.red + 1}
        });
    }
    function yellowHandler() {
        setMoves((moves) => {
            return {...moves, yellow : moves.yellow + 1}
        });
    }
    function greenHandler() {
        setMoves((moves) => {
            return {...moves, green : moves.green + 1}
        });
    }
    let blueStyle ={backgroundColor : "blue"}
    let redStyle ={backgroundColor : "red"}
    let yellowStyle ={backgroundColor : "yellow"}
    let greenStyle ={backgroundColor : "green"}

    return(
        <div>
            <p>Game Begins!</p>
            <div>
                <p>Blue Moves = {moves.blue}</p>
                <button onClick={blueHandler} style={blueStyle}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button onClick={redHandler} style={redStyle}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button onClick={yellowHandler} style={yellowStyle}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button onClick={greenHandler} style={greenStyle}>+1</button>
            </div>
        </div>
    )
}