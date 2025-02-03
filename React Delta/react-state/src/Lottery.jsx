import { useState } from "react"
import { generateRandomNum, arrSum } from "./lotteryHelper"
import './Lottery.css' 

export default function Lottery() {
    let [ticket,setTicket] = useState(generateRandomNum(3));
    let isWinning = arrSum(ticket) === 15; // isWinning = true/false;

    let regenerateTicket = () => {
        setTicket(generateRandomNum(3));
    }

    return (
        <div>
            <h2>Lottery Game</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br></br>
            
            <button onClick={regenerateTicket}>Regenerate</button>
            <h2>{isWinning && "Congratulations! You Won..."}</h2>
        </div>
    )
}