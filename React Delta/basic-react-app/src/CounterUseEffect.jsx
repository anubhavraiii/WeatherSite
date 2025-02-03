import { useEffect, useState } from "react";

export default function CounterUseEffect(){
    let [count,setCount] = useState(0);
    let incCount = () => {
        setCount((prevCount) => {
            return prevCount+1
        });
    }

    useEffect(function sidEffect(){
        console.log("this is a side effect");
        
    })

    return (
        <div>
            <h3 >Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}